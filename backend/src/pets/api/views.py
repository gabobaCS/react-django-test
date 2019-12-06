from rest_framework import viewsets
from pets.models import Pet
from .serializers import PetSerializer


class PetView(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
