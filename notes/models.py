"""Notes Models"""
from datetime import datetime
from django.db import models

# Create your models here.

class Note(models.Model):
    """Note model"""
    name = models.TextField(blank=False)
    content = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True, blank=True)

    class Meta:
        ordering = ('-created', )

    def __str__(self):
        return f'{self.pk}-{self.name}'

