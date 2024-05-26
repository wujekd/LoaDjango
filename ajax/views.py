from django.shortcuts import render
from .models import Profile
from django.http import JsonResponse
import random




def ajax(request):
    return render(request, "ajax.html")


def getData(request):
    prof = Profile.objects.all()
    rand = random.randint(1,3)
    print(rand)
    
    res = None
    
    if rand == 1:
        res = "success"
    elif rand == 2:
        res = "not enough points"
    elif rand == 3:
        res = "already downloaded"
    
    return JsonResponse({
        "profiles": list(prof.values()),
        "res" : res
        })


def test(request):
    print("test!!!!!!")