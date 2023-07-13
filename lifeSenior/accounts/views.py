from datetime import date
import datetime
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth
from .models import Profile, CorrectByDate

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

    context = {
        'categoryList': index,
        'allList': correctQuizCount,
    }

    return render(request, "accounts/profile.html", context)

def updateProfile(request):
    if request.method == 'POST':
        pass