from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class Quiz(models.Model):
    text = models.CharField("TEXT", max_length=100) #질문 문항
    description = models.CharField("DESCRIPTION", max_length=40) #카테고리 요약금
    category = models.CharField("CATEGORY", max_length=20) #카테고리
    difficulty = models.PositiveIntegerField("DIFFICULTY", default=0) #난이도
    total = models.PositiveIntegerField("TOTAL", default=0) #전체 정답 시도 수
    incorrect = models.PositiveIntegerField("INCORRECT", default=0) #문제 오답 수
    content = models.TextField("CONTENT", default=0) #오답노트
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)