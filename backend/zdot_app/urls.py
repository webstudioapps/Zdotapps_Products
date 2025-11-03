# zdot_app/urls.py
from django.urls import path
from .views import JobApplicationView, SendOTPView, VerifyOTPView

urlpatterns = [
    path('api/contact/', JobApplicationView.as_view(), name='job-application'),
    path('api/send-otp/', SendOTPView.as_view(), name='send-otp'),
    path('api/verify-otp/', VerifyOTPView.as_view(), name='verify-otp'),
]