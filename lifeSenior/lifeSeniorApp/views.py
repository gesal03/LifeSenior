from django.shortcuts import render
from quizApp.models import Quiz

# Create your views here.
def index(request):
    return render(request, 'lifeSeniorApp/start.html')

def main(request):
    def get_random():
        return Quiz.objects.order_by("?").first()
    
    randomQuiz = get_random()
    
    context = {
        'quiz': randomQuiz
    }
    return render(request, 'lifeSeniorApp/main.html', context)