# Generated by Django 5.0.6 on 2024-06-07 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0012_alter_songresposes_audio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='songresposes',
            name='audio',
            field=models.FileField(upload_to='music/collabs/responses'),
        ),
        migrations.AlterField(
            model_name='songs',
            name='audio',
            field=models.FileField(upload_to='music/collabs/demos'),
        ),
        migrations.AlterField(
            model_name='songs',
            name='pic',
            field=models.FileField(upload_to='music/collabs/demos'),
        ),
        migrations.AlterField(
            model_name='tunes',
            name='file',
            field=models.FileField(blank=True, upload_to='music/tunes'),
        ),
        migrations.AlterField(
            model_name='tunes',
            name='pic',
            field=models.FileField(blank=True, null=True, upload_to='music/tunes'),
        ),
    ]
