from django.urls import path
from .views import home, signUp

app_name='accounts'

urlpatterns = [
    path('', home),
    path('signUp', signUp, name='signUp'),
]
    