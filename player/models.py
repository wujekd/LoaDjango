from django.db import models

# Create your models here.


class Tunes(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=30, blank=True)
    date = models.DateField(auto_now_add=True)
    file = models.FileField(upload_to='music', blank=True)
    pic = models.FileField(upload_to="music", blank=True, null=True)
    
    def __str__(self):
        return f"{self.title}"


class Songs(models.Model):
    title = models.CharField(max_length=30)
    author = models.CharField(max_length=30)
    info = models.TextField(max_length=150)
    date = models.DateField(auto_now_add=True)
    audio = models.FileField(upload_to='music')
    pic = models.FileField(upload_to="music")
    
    def __str__(self):
        return f"{self.title}"
    
class SongResposes(models.Model):
    title = models.CharField(max_length=30)
    author = models.CharField(max_length=30)
    info = models.TextField(max_length=150)
    date = models.DateField(auto_now_add=True)
    audio = models.FileField(upload_to='music/collab_responses')
    song = models.ForeignKey(Songs, on_delete=models.CASCADE, related_name='responses')
    approved = models.BooleanField(default=False)
    volumeOffset = models.FloatField(null=True, blank=True)
    demoCreated = models.BooleanField(default=False, blank=True, null=True)
    checked = models.BooleanField(default=False, null=True, blank=True)
    modComment = models.TextField(max_length=150, null=True, blank=True)
    
    def __str__(self):
        return f"{self.id} - {self.title} - Approved: {self.approved} - Vol: {self.volumeOffset}"
    