from django.db import models

# Create your models here.
class Quiz(models.Model):
    text = models.CharField("TEXT", max_length=100) # 질문 문항
    description = models.CharField("DESCRIPTION", max_length=40) # 카테고리 요약금
    category = models.PositiveIntegerField("CATEGORY") # 카테고리
    #REALTY: 0, ECONOMY: 1, SELFDEVELOPMENT: 2, DISCOUNT: 3, COMMONSENSE: 4, ETC: 5
    difficulty = models.PositiveIntegerField("DIFFICULTY", default=0) # 난이도
    total = models.PositiveIntegerField("TOTAL", default=0) # 전체 정답 시도 수
    incorrect = models.PositiveIntegerField("INCORRECT", default=0) # 문제 오답 수
    correct = models.CharField("CORRECT", max_length=10) # 문제의 정답
    content = models.TextField("CONTENT") # 오답노트



class Choice(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    text = models.CharField("TEXT", max_length=10)
    isCorrect = models.CharField("ISCORRECT", max_length=10, default="incorrectA")

class Term(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=50)
    content = models.TextField("TEXT")
    category = models.CharField("CATEGORY", max_length=30)