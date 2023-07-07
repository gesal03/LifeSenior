from django.db import models

# Create your models here.
class Term(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=50)
    content = models.TextField("TEXT")
    category = models.CharField("CATEGORY", max_length=30)