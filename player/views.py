from django.shortcuts import render
from .models import Tunes, Songs, SongResposes

# Create your views here.
from django.shortcuts import render


def player1(request):
    tunes = Tunes.objects.all()
    return render(request, 'player1.html', {'tunes' : tunes})

def player2(request, pk):
    song = Songs.objects.get(pk=pk)
    responses = SongResposes.objects.filter(song=song)
    
    return render(request, "player-double.html", {
        "song" : song,
        "responses" : responses,
    })