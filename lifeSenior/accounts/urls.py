from django.urls import path
from .views import home, signUp, logIn, logOut

app_name='accounts'

urlpatterns = [
    path('', home),
    path('signUp', signUp, name='signUp'),
    path('logIn', logIn, name='logIn'),
    path('logOut', logOut, name='logOut'),
]
    