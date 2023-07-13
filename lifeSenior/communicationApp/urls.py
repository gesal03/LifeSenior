from django.urls import path
from .views import home 
# communication_list, communication_detail, my_question, my_answer, question_create, answer_create, answer_list

app_name = 'communicationApp'

urlpatterns = [
    path('', home),
    # path('communication_list', communication_list, name='communication_list'),
    # path('communication_detail', communication_detail, name='communication_detail'),
    # path('my_question', my_question, name='my_question'),
    # path('my_answer', my_answer, name='my_answer'),
    # path('question_create', question_create, name='question_create'),
    # path('answer_create', answer_create, name='answer_create'),
    # path('answer_list', answer_list, name='answer_list')
]
    