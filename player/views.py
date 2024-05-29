from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def player1(request):
    return render(request, 'player1.html')