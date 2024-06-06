
from django import forms
from .models import SongResposes

class ResponseForm(forms.ModelForm):
    class Meta:
        model = SongResposes
        fields = ['volumeOffset', 'approved']
        widgets = {
            'volumeOffset': forms.NumberInput(attrs={'type': 'range', 'min': '0', 'max': '10', 'step': '0.1'}),
            'approved': forms.CheckboxInput()
        }


class SongResponseForm(forms.ModelForm):
    class Meta:
        model = SongResposes
        fields = ['title', 'info', 'audio', 'volumeOffset', "song"]