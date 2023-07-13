from django.shortcuts import render
from quizApp.models import Quiz
from communicationApp.models import Question

# Create your views here.
def index(request):
    return render(request, 'lifeSeniorApp/start.html')

def main(request):
    if request.method == 'POST':
        arr = request.POST.get('array', None)
        print(arr)
        categorys = [0, 1, 2, 3, 4, 5]
        # sorts = ['date', 'likes', 'views', 'answerd', 'notAnswerd']
        sort = 'date'

        index=0
        for category in categorys:
            if index==0:
                questions = Question.objects.filter(category=category)
            else:
                index+=1
                question = Question.objects.filter(category=category)
                questions.union(question)

        if sort == 'date':
            communication_list = questions.order_by('-date')
        elif sort == 'likes':
            communication_list = questions.order_by('-recommend')
        elif sort == 'views':
            communication_list = questions.order_by('-views')
        elif sort == 'answerd':
            communication_list = questions.filter(answerd=True).order_by('-date')
        else:
            communication_list = questions.filter(answerd=False).order_by('-date')
    else:
        communication_list = Question.objects.all().order_by('-date')

    def get_random():
        return Quiz.objects.order_by("?").first()

    randomQuiz = get_random()
    context = {
        'quiz': randomQuiz,
        'communication_list':communication_list
    }
    return render(request, 'lifeSeniorApp/main.html', context)