from django.urls import path
from .views import home, solveQuiz, studySpace, stateAll, stateCategory

app_name = 'quizApp'

urlpatterns = [
    path('home', home, name="home"),
    # path('solveQuiz/<int:quiz_id>/<str:choice_text>', solveQuiz, name="solveQuiz"),
    path('solveQuiz', solveQuiz, name="solveQuiz"),
    path('studySpace/<int:level>', studySpace, name="studySpace"),
    path('stateAll', stateAll, name='stateAll'),
    path('stateCategory', stateCategory, name="stateCategory")
]
    