# models.py
from django.db import models


class JobApplication(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email_address = models.EmailField(max_length=254) # Changed to EmailField for better validation
    phone_number = models.CharField(max_length=20)
    years_of_experience = models.CharField(max_length=20)
    heard_about_us = models.CharField(max_length=100)
    upload_resume = models.FileField(upload_to='resumes/') # Stores files in 'media/resumes/'
    github_link = models.URLField(max_length=200, blank=True, null=True) # Changed to URLField
    linkedin_link = models.URLField(max_length=200, blank=True, null=True) # Changed to URLField
    figma_link = models.URLField(max_length=200, blank=True, null=True) # Changed to URLField
    applied_at = models.DateTimeField(auto_now_add=True) # Automatically sets on creation

    class Meta:
        # managed = False # Remove this if you want Django to manage the table
        db_table = 'JobApplication'

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.email_address}"

class ContactRequest(models.Model):
    full_name = models.CharField(max_length=100)
    work_email = models.EmailField()
    message = models.TextField(blank=True, null=True)
    attachment = models.FileField(upload_to='attachments/', blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'contact_request'
        ordering = ['-submitted_at']

    def __str__(self):
        return f"{self.full_name} - {self.work_email}"