from datetime import date
import datetime
from django.shortcuts import render, redirect, get_object_or_404
from django.utils import timezone
from .models import Quiz
from accounts.models import Profile, CorrectByDate, InCorrectByDate
from .models import Term

# Create your views here.
def home(request):
    return render(request, 'quizApp/study-easy.html')

def solveQuiz(request):
    quiz_id = request.POST.get('pk', None) # ajax 통신을 통해서 template에서 POST방식으로 전달
    choice_text = request.POST.get('text', None)

    quiz = get_object_or_404(Quiz, pk=quiz_id)
    user = Profile.objects.get(user = request.user)

    if quiz.correct == choice_text:
        today = timezone.now().strftime('%Y-%m-%d')
        correct = CorrectByDate(user=request.user, date=today, quiz=quiz)
        correct.save()
        quiz.total += 1
        user.total += 1
        if quiz.category == "Realty":
            user.realty += 1
        elif quiz.category == "Economy":
            user.economy += 1
        elif quiz.category == "SelfDevelopment":
            user.selfDevelopment += 1
        elif quiz.category == "Discount":
            user.discount += 1
        elif quiz.category == "commonSense":
            user.commonSense += 1
        else:
            user.etc += 1
        quiz.save()
        user.save()
    else:
        today = timezone.now().strftime('%Y-%m-%d')
        inCorrect = InCorrectByDate(user=request.user, date=today, quiz=quiz)
        inCorrect.save()
        quiz.total += 1
        quiz.incorrect += 1
        quiz.save()

    # 이 전 페이지로 돌아가버리기
    return redirect(request.META.get('HTTP_REFERER', 'redirect_if_referer_not_found'))   

def studySpace(request, level):
    def get_random(category):
        term = Term.objects.filter(category=category).order_by("?").first()
        return term
    
    randomRealtyTerm = get_random("Realty")
    realtyContents = randomRealtyTerm.content.split("\n")
    randomEconomyTerm = get_random("Economy")
    economyContents = randomEconomyTerm.content.split("\n")

    quizs = {}
    quizAll = Quiz.objects.filter(difficulty=level).order_by("?").first()

    for category in range(6):
        quiz = Quiz.objects.filter(category=category, difficulty=level).order_by("?").first()
        boxIndex = category + 2
        boxNumber = "box-" + str(boxIndex)
        quizs[quiz] = boxNumber

    context = {
        'realtyTerm': randomRealtyTerm,
        'realtyContents': realtyContents,
        'economyTerm': randomEconomyTerm,
        'economyContents': economyContents,
        'quizs': quizs,
        'quizAll': quizAll
    }
    if level == 0:                    
        return render(request, 'quizApp/study-easy.html', context)
    elif level == 1:
        return render(request, 'quizApp/study-normal.html', context)
    elif level == 2:
        return render(request, 'quizApp/study-hard.html', context)
    else:
        return render(request, 'quizApp/study-very-hard.html', context)
    

def stateAll(request):
    today = date.today()
    
    inCorrectQuiz = InCorrectByDate.objects.filter(user=request.user, date=today)
    quizIds = inCorrectQuiz.values_list('quiz', flat=True).distinct()

    quizArr=[]
    for quizId in quizIds:
        quiz = Quiz.objects.get(pk=quizId)
        print(quiz)
        quizArr.append(quiz)
    print(quizArr)
    correctQuizCount = ""

    for index in range(6,0,-1):
        day = today - datetime.timedelta(days=index)
        correctQuiz = CorrectByDate.objects.filter(user=request.user, date=day)
        quizs = correctQuiz.values_list('quiz', flat=True).distinct()
        correctQuizCount += str(quizs.count())
    
    context = {
        'correctQuizCount': correctQuizCount,
        'quizs':quizArr
    }
    return render(request, 'quizApp/current-all.html', context)

def stateCategory(request):
    index = ""
    profile = Profile.objects.get(user = request.user)
    
    index += str(profile.total // 10)
    index += str(profile.realty // 10)
    index += str(profile.economy // 10)
    index += str(profile.selfDevelopment // 10)
    index += str(profile.discount // 10)
    index += str(profile.commonSense // 10)
    index += str(profile.etc // 10)

    print(index)
    context = {
        'index': index
    }
    return render(request, 'quizApp/current-not-all.html', context)