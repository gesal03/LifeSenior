from django.db import models

class Club(models.Model):
    name = models.CharField("NAME", max_length=50) # 동아리 이름
    
# Create your models here.
