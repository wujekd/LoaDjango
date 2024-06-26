# Generated by Django 5.0.6 on 2024-06-05 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0009_alter_songresposes_volumeoffset'),
    ]

    operations = [
        migrations.AddField(
            model_name='songresposes',
            name='checked',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AddField(
            model_name='songresposes',
            name='modComment',
            field=models.TextField(blank=True, max_length=150, null=True),
        ),
    ]
