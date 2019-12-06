# Generated by Django 3.0 on 2019-12-06 19:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0003_auto_20191206_1607'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pet',
            name='age',
        ),
        migrations.AddField(
            model_name='pet',
            name='edad',
            field=models.IntegerField(default=3),
        ),
        migrations.AddField(
            model_name='pet',
            name='especie',
            field=models.CharField(default='test', max_length=30),
        ),
        migrations.AddField(
            model_name='pet',
            name='raza',
            field=models.CharField(default='test', max_length=30),
        ),
    ]
