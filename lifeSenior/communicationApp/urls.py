from django.urls import path
from .views import home

app_name = 'communicationApp'

urlpatterns = [
    path('', home),
]
    