from django.db import models

# Create your models here.


class Tunes(models.Model):
    title = models.CharField(max_length=50)
    date = models.DateField(auto_now_add=True)
    file = models.FileField(upload_to='music', blank=True)
    
    def __str__(self):
        return f"{self.title}"
