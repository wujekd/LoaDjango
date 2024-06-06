from django.shortcuts import render, get_object_or_404,redirect
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

def submit(request, pk):
    song = get_object_or_404(Songs, pk=pk)
    
    if request.method == 'POST':
        
        form = SongResponseForm(request.POST, request.FILES)
        
        if form.is_valid():
            
            song_response = form.save()
            with open('submissions_to_render_demos.txt', 'a') as f:
                f.write(f"{song_response.id},{song_response.audio.path}\n")


            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'errors': form.errors})

    form = SongResponseForm()

    return render(request, "submit.html", {
        "form" : form,
        "song" : song,
    })