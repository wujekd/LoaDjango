from django.contrib import admin

from .models import Tunes, Songs, SongResposes

# Register your models here.
admin.site.register(Tunes)
admin.site.register(Songs)
admin.site.register(SongResposes)