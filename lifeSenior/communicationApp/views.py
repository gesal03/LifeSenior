from django.shortcuts import render, redirect
from .forms import PostForm
from .models import Post

# Create your views here.
def home(request):
    return render(request, 'main.html')

#-----기본 메인 화면-----
#소통게시판 : communication_list
def communication_list(request):
    posts = Post.objects.all()
    return render(request, 'communicationApp/communication_list.html', {'posts': posts})

#내가 한 질문 : my_question
def my_question(request):
    return render(request, 'my_question.html')

#내가 한 답변 : my_answer
def my_answer(request):
    return render(request, 'my_answer.html')

#질문하기 작성할 때 : question_create
def question_create(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('communicationApp:communication_list')
    else:
        form = PostForm()
    return render(request, 'communicationApp/question_create.html', {'form': form})

#답변하기 작성할 때 : answer_create
def answer_create(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('communicationApp:communication_list')
    else:
        form = PostForm()
    return render(request, 'communicationApp/answer_create.html', {'form': form})

#답변하기 : answer_list
def answer_list(request):
    return render(request, 'answer_list.html')

#답변하기 추천 기능 : answer_recommend
@login_required
def answer_recommend(request, answer_id):
    answer = get_object_or_404(Answer, pk=answer_id)
    if request.user == answer.author:
        message.error(request, '본인이 작성한 글은 추천할 수 없습니다.')
    else:
        answer.recommend.add(request.user)
    return redirect('communicationApp:answer_list', question_id=answer.question.id)