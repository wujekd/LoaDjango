from django.shortcuts import render
from .forms import ImgUploadForm
from django.http import JsonResponse




def is_ajax(request):
  return request.headers.get('x-requested-with') == 'XMLHttpRequest'

def main_view(request):
    form = ImgUploadForm(request.POST or None, request.FILES or None)
    if is_ajax(request):
        if form.is_valid():
            form.save()
            return JsonResponse({'message' : 'hell yeah'})
    return render(request, 'uploads/main.html', {'form':form})