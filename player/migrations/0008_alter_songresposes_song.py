# Generated by Django 5.0.6 on 2024-06-04 11:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0007_alter_songresposes_approved'),
    ]

    operations = [
        migrations.AlterField(
            model_name='songresposes',
            name='song',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='responses', to='player.songs'),
        ),
    ]
