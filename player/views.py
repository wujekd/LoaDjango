from django.shortcuts import render
from .models import Tunes

# Create your views here.
from django.shortcuts import render



def player1(request):
    tunes = Tunes.objects.all()
    return render(request, 'player1.html', {'tunes' : tunes})