from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth
from .models import Profile

# Create your views here.
def home(request):
    return render(request, 'main.html')

def signUp(request):
    if request.method == 'POST':
        if request.POST['password1'] == request.POST['password2']:
            user = User.objects.create_user(
                username=request.POST['username'],
                password=request.POST['password1']
            )
            profile = Profile(user=user)
            profile.save
            auth.login(request,user)
            return redirect('/')
        return redirect('accounts:signUp')
    return render(request, 'main.html')