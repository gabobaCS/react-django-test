# Generated by Django 3.0 on 2019-12-06 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0008_pet_encontrado'),
    ]

    operations = [
        migrations.AddField(
            model_name='pet',
            name='fecha_desaparecido',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='pet',
            name='chip',
            field=models.BooleanField(default=False),
        ),
    ]
