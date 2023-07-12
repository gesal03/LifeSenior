from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model

user = get_user_model()

#질문
class Question(models.Model):
    autor = models.ForeignKey(user, on_delete=models.CASCADE, related_name='author_question') #작성자
    title = models.CharField("TITLE", max_length=20, default="질문 제목") #질문 제목
    content = models.TextField("CONTENT", max_length=50, default="질문 내용") #질문 내용
    date = models.DateTimeField("DATE", auto_now_add=True) #작성일자
    recommend = models.PositiveIntegerField("RECOMMEND", default=0) #추천수
    category = models.CharField("CATEGORY", max_length=10) #카테고리
    views = models.PositiveIntegerField("VIEWS", default=0) #조회수
    answerd = models.BooleanField("ANSWERD", default=False) #답변 여부
    

#질문에 대한 답변
class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE) #questionFK
    autor = models.ForeignKey(user, on_delete=models.CASCADE, related_name='author_answer') #작성자
    content = models.TextField("CONTENT", max_length=50, default="답변 내용") #답변 내용
    image = models.ImageField("IMAGE", upload_to="questionAnswer/", default="static/img/defaultImg.png") #답변 사진
    recommend = models.ManyToManyField(user, related_name='voer_question') #추천 수 수집을 위한 모델

#댓글
class Comment(models.Model):
    autor = models.ForeignKey(user, on_delete=models.CASCADE) #작성자
    question = models.ForeignKey(Question, on_delete=models.CASCADE) #질문
    content = models.CharField("CONTENT", max_length=20, default="댓글입력") #댓글 내용
    date = models.DateField("DATE", auto_now_add=True) #작성 날짜