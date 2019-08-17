"""Notes Models"""
from datetime import datetime
from django.db import models

# Create your models here.

class Note(models.Model):
    """Note model"""
    name = models.TextField(blank=False)
    content = models.TextField(blank=True)
    created = models.DateTimeField(default=datetime.now, blank=True)
