from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def base_view(request):
    return render(request, 'basetw.html')