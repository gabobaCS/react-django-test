# Generated by Django 3.0 on 2019-12-06 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0006_auto_20191206_1612'),
    ]

    operations = [
        migrations.AddField(
            model_name='pet',
            name='chip',
            field=models.BooleanField(default=None),
        ),
        migrations.AddField(
            model_name='pet',
            name='color',
            field=models.CharField(default='test', max_length=30),
        ),
    ]
