from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model

User = get_user_model()

# user 수정해야됨. 이런 식으로 하면 기본 유저 정보를 모두 사용해야하는 번거로움이..
class Profile(models.Model):
    # user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=0)
    name = models.CharField("NAME", max_length=20, default="baby lion") # 사용자 이름
    description = models.CharField("DESCRIPTION", max_length=30, default="안녕하세요! 아기사자입니다.") # 사용자 한 줄 소개
    image = models.ImageField("IMAGE", upload_to="userProfile/", default="static/img/defaultImg.png") # 프로필 사진
    total = models.PositiveIntegerField("TOTAL", default=0) # 전체 맞힌 문제 수
    realty = models.PositiveIntegerField("REALTY", default=0) # 부동산 문제 맞힌 수
    economy = models.PositiveIntegerField("ECONOMY", default=0) # 경제 문제 맞힌 수
    selfDevelopment = models.PositiveIntegerField("SELFDEV", default=0) # 자기개발 문제 맞힌 수
    discount = models.PositiveIntegerField("DISCOUNT", default=0) # 할인 문제 맞힌 수
    commonSense = models.PositiveIntegerField("COMMONSENSE", default=0) # 시사상식 문제 맞힌 수
    etc = models.PositiveIntegerField("ETC", default=0) # 기타 문제 맞힌 수
    answerCount = models.PositiveIntegerField("ANWERCOUNT", default=0) # 답변 수
    recommendCount = models.PositiveIntegerField("RECOMMENDCOUNT", default=0) # 추천 받은 답변 수
    questionCount = models.PositiveIntegerField("QUESTIONCOUNT", default=0) # 질문 수