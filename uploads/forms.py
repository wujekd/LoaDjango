from django import forms
from .models import ImageUpload

class ImgUploadForm(forms.ModelForm):
    class Meta:
        model = ImageUpload
        fields = ['image',]
        
