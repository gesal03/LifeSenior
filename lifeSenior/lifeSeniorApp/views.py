from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'lifeSeniorApp/start.html')

def main(request):
    return render(request, 'lifeSeniorApp/main.html')