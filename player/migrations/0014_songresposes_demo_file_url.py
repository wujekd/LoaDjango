# Generated by Django 5.0.6 on 2024-06-09 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0013_alter_songresposes_audio_alter_songs_audio_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='songresposes',
            name='demo_file_url',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]