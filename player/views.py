from django.shortcuts import render, get_object_or_404,redirect
from .models import Tunes, Songs, SongResposes
from django.db.models import Prefetch, Q

# Create your views here.
from django.shortcuts import render
from django.urls import reverse

def player1(request):
    tunes = Tunes.objects.all()
    return render(request, 'player1.html', {'tunes' : tunes})



def player2(request, pk):
    song = get_object_or_404(Songs, pk=pk)
    responses = SongResposes.objects.filter(song=song, approved=True)
    
    return render(request, "player-double.html", {
        "song": song,
        "responses": responses,
    })
    
    
def unchecked_subs(request):
    # Prefetch only the unapproved responses with demoCreated set to True
    unapproved_responses = SongResposes.objects.filter(Q(approved=False) | Q(approved__isnull=True), demoCreated=True)
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

from .forms import ResponseForm

def check(request, pk):
    response = get_object_or_404(SongResposes, pk=pk)
    song = response.song

    if request.method == 'POST':
        form = ResponseForm(request.POST, instance=response)
        if form.is_valid():
            form.save()
            print("form valid")
            return redirect('check') 
    else:
        form = ResponseForm(instance=response)

    context = {
        'response': response,
        'song': song,
        'form': form
    }
    return render(request, 'check-sub.html', context)






from django.http import JsonResponse
from .forms import SongResponseForm
import os

from django.http import JsonResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse
from .models import Songs

def submit(request, pk):
    song = get_object_or_404(Songs, pk=pk)

    if song is None:
        return redirect('index')  # Redirect to the 'index' view if song not found

    if request.method == 'POST':
        form = SongResponseForm(request.POST, request.FILES)
        if form.is_valid():
            song_response = form.save()
            with open('submissions_to_render_demos.txt', 'a') as f:
                f.write(f"{song_response.id},{song_response.audio.path}\n")
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'errors': form.errors})
    else:
        form = SongResponseForm()
        return render(request, "submit.html", {
            "form" : form,
            "song" : song,
        })
