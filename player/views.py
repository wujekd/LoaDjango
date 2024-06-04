from django.shortcuts import render
from .models import Tunes, Songs, SongResposes
from django.db.models import Prefetch

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
    
    
def unchecked_subs(request):
    # Prefetch only the unapproved responses
    unapproved_responses = SongResposes.objects.filter(approved=False)
    songs_with_unapproved_responses = Songs.objects.prefetch_related(
        Prefetch('responses', queryset=unapproved_responses, to_attr='unapproved_responses')
    )

    # Filter songs that have unapproved responses
    songs_with_unapproved_responses = [song for song in songs_with_unapproved_responses if song.unapproved_responses]

    # Pass the data to the template
    context = {
        'songs': songs_with_unapproved_responses
    }
    return render(request, "checksubmissions.html", context)



def check(request, pk):
    pass