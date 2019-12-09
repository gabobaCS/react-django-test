from django.db import models


class Pet(models.Model):
    nombre = models.CharField(max_length=30)
    especie = models.CharField(max_length=30)
    raza = models.CharField(max_length=30)
    edad = models.IntegerField()
    color = models.CharField(max_length=30)
    chip = models.BooleanField(default=False)
    encontrado = models.BooleanField(default=False)
    fecha_desaparecido = models.DateField(blank=True, null=True)
    descripcion = models.TextField(blank = True, null = True)

    def __str__(self):
        return self.nombre
