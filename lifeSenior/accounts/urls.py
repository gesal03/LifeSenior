from django.urls import path
from .views import home, signUp, logIn, logOut, profile, update_profile

app_name='accounts'

urlpatterns = [
    path('', home),
    path('signUp', signUp, name='signUp'),
    path('logIn', logIn, name='logIn'),
    path('logOut', logOut, name='logOut'),
    path('profile', profile, name="profile"),
    path('update_profile', update_profile, name="update_profile")
]
    