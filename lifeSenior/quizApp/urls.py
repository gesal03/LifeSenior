from django.urls import path
from .views import home

app_name = 'quizApp'

urlpatterns = [
    path('home', home, name="home"),

]
    