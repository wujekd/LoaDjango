# Generated by Django 5.0.6 on 2024-06-04 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0006_songresposes_volumeoffset'),
    ]

    operations = [
        migrations.AlterField(
            model_name='songresposes',
            name='approved',
            field=models.BooleanField(default=False),
        ),
    ]
