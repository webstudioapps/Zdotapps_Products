from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import JobApplicationSerializer
import random
from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone
from datetime import timedelta
from django.core.cache import cache

class JobApplicationView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = JobApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Application submitted successfully!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SendOTPView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        if not email:
            return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)

        # Generate 6-digit OTP
        otp = str(random.randint(100000, 999999))
        
        # Store OTP with expiry (5 minutes) using Django cache
        cache_key = f"otp_{email}"
        cache.set(cache_key, otp, 300)  # 300 seconds = 5 minutes

        # Send email (using console backend for development)
        try:
            send_mail(
                subject='Your OTP Code - Z.Apps',
              message = f"""Your OTP verification code is: {otp}

This code will expire in 5 minutes.

If you didn't request this code, please ignore this email.

Best regards,  
Z.Apps Team
""",


                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[email],
                fail_silently=False,
            )
            print(f"OTP sent to {email}: {otp}")  # Console output for development
            return Response({'message': 'OTP sent successfully', 'otp': otp}, status=status.HTTP_200_OK)
        except Exception as e:
            print(f"Error sending OTP: {str(e)}")  # Console output for debugging
            return Response({'error': f'Failed to send email: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class VerifyOTPView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        otp = request.data.get('otp')

        if not email or not otp:
            return Response({'error': 'Email and OTP are required'}, status=status.HTTP_400_BAD_REQUEST)

        # Get OTP from cache
        cache_key = f"otp_{email}"
        stored_otp = cache.get(cache_key)
        
        if not stored_otp:
            return Response({'error': 'No OTP found for this email'}, status=status.HTTP_400_BAD_REQUEST)

        if stored_otp == otp:
            # Delete OTP from cache after successful verification
            cache.delete(cache_key)
            return Response({'message': 'OTP verified successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)