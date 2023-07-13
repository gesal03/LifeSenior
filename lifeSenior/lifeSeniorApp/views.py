from django.shortcuts import render
from quizApp.models import Quiz
from communicationApp.models import Question

# Create your views here.
def index(request):
    return render(request, 'lifeSeniorApp/start.html')

def main(request):
    if request.method == 'POST':
        categoryArr = request.POST.getlist('array[]', None)
        
        categorys=[]
        for index in categoryArr:
            categorys.append(int(index))
        # sorts = ['date', 'likes', 'views', 'answerd', 'notAnswerd']

        print(categorys)

        index=0
        for category in categorys:
            if index==0:
                questions = Question.objects.filter(category=category)
            else:
                index+=1
                question = Question.objects.filter(category=category)
                questions.union(question)

        communication_list = questions.order_by('-date')[:10]
    else:
        communication_list = Question.objects.all().order_by('-date')[:10]

    def get_random():
        return Quiz.objects.order_by("?").first()

    randomQuiz = get_random()
    context = {
        'quiz': randomQuiz,
        'communication_list':communication_list
    }
    return render(request, 'lifeSeniorApp/main.html', context)