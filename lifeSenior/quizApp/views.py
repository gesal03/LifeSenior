from django.shortcuts import render, redirect, get_object_or_404
from .models import Quiz
from accounts.models import Profile
from .models import Term

# Create your views here.
def home(request):
    return render(request, 'quizApp/study-easy.html')

def solveQuiz(request, quiz_id, choice_text):
    quiz = get_object_or_404(Quiz, pk=quiz_id)
    user = Profile.objects.get(user = request.user)

    if quiz.correct == choice_text:
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

    

    context = {
        'realtyTerm': randomRealtyTerm,
        'realtyContents': realtyContents,
        'economyTerm': randomEconomyTerm,
        'economyContents': economyContents
    }
    if level == 0:
        return render(request, 'quizApp/study-easy.html', context)
    elif level == 1:
        return render(request, 'quizApp/study-normal.html', context)
    elif level == 2:
        return render(request, 'quizApp/study-hard.html', context)
    else:
        return render(request, 'quizApp/study-very-hard.html', context)