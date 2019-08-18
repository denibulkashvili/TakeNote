"""Notes app models"""
from datetime import datetime
from django.conf import settings
from django.db import models

# Create your models here.

class Note(models.Model):
    """Note model"""
    name = models.TextField(blank=False)
    content = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True, blank=True)
    posted_by = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.CASCADE)

    class Meta:
        ordering = ('-created', )

    def __str__(self):
        return f'{self.pk}-{self.name}'

class Like(models.Model):
    """Like model"""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    note = models.ForeignKey('notes.note', related_name='likes', on_delete=models.CASCADE)