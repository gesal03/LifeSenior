from datetime import date
import datetime
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib import auth
from .models import Profile, CorrectByDate
from communicationApp.models import Answer, Question

# Create your views here.
def home(request):
    return render(request, 'main.html')

def signUp(request):
    if request.method == 'POST':
        if request.POST['password1'] == request.POST['password2']:
            user = User.objects.create_user(
                username=request.POST['username'],
                password=request.POST['password1']
            )
            profile = Profile(user=user)
            profile.save()
            auth.login(request,user)
            return redirect('accounts:logIn')
        return redirect('accounts:signUp')
    return render(request, 'accounts/signUp.html')

def logIn(request):
    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST["password"]
        user = auth.authenticate(request, 
        username=username, 
        password=password, 
        )
        if user is not None:
            auth.login(request, user)
            return redirect('main')
    return render(request, 'accounts/login.html')

def logOut(request):
    auth.logout(request)
    return redirect('index')

def profile(request):
    index = ""
    correctQuizCount = ""
    today = date.today()
    
    profile = Profile.objects.get(user = request.user)
    index += str(profile.total // 10)
    index += str(profile.realty // 10)
    index += str(profile.economy // 10)
    index += str(profile.selfDevelopment // 10)
    index += str(profile.discount // 10)
    index += str(profile.commonSense // 10)
    index += str(profile.etc // 10)

    for index in range(6,0,-1):
        day = today - datetime.timedelta(days=index)
        correctQuiz = CorrectByDate.objects.filter(user=request.user, date=day)
        quizs = correctQuiz.values_list('quiz', flat=True).distinct()
        correctQuizCount += str(quizs.count())

    answers = Answer.objects.filter(autor=request.user)
    answerCount = answers.count()
    answerRecommendCount=0
    for answer in answers:
        answerRecommendCount += answer.recommend
    questionCount = Question.objects.filter(autor=request.user).count()
    

    context = {
        'categoryList': index,
        'allList': correctQuizCount,
        'answerCount': answerCount,
        'answerRecommendCount': answerRecommendCount,
        'questionCount': questionCount
    }

    return render(request, "accounts/profile.html", context)

def update_profile(request):
    profile = get_object_or_404(Profile, user=request.user)
    print(profile.name)
    if request.method == 'POST':
        myImg = request.FILES.get('answerImage')
        name = request.POST['name']
        description = request.POST['description']
        profile = get_object_or_404(Profile, user=request.user).update(
            name=name,
            description=description,
            image=myImg
        )
        print(profile)
        profile.save()
        return redirect("accounts:profile")
    else:
        print("error")
