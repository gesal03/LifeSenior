from django.shortcuts import render, redirect
from .models import Question

# Create your views here.
def home(request):
    return render(request, 'main.html')

#-----기본 메인 화면-----
#소통게시판 : communication_list
def communication_list(request):
    communication_list = Question.objects.all().order_by('-date')
    context = {
        'communication_list': communication_list
    }
    return render(request, 'communicationAPP/communication_list.html', context)

#소통게시판 메인_질문하나 클릭하면 나오는 화면 : communication_detail
def communication_detail(request):
    return render(request, 'communicationAPP/communication_detail.html')

#답변하기 : answer_list
def answer_list(request):
    return render(request, 'communicationAPP/answer_list.html')

#질문에 답변하기_질문하나 클릭시 : answer_detail
def answer_detail(request, answer_detail):
    return render(request, 'communicationAPP/answer_detail.html')

#내가 한 질문 : my_question
def my_question(request):
    return render(request, 'my_question.html')

#내가 한 답변 : my_answer
def my_answer(request):
    my_answer = Question.objects.all().order_by('-date')
    context = {
        'my_answer': my_answer
    }
    return render(request, 'communicationAPP/my_answer.html', context)

#질문하기 작성할 때 : question_create
def question_create(request):
    return render(request, 'communicationAPP/question_create.html')

#답변하기 작성할 때 : answer_create
def answer_create(request):
    return render(request, 'communicationAPP/answer_create.html')

#답변하기 추천 기능 : answer_recommend
def answer_recommend(request, answer_id):
    return render(request, 'answer_recommend.html')

