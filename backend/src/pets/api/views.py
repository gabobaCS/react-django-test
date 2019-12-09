from rest_framework import viewsets
from pets.models import Pet
from .serializers import PetSerializer
from .viewsets import CreateRetrieveViewSet


# class PetView(viewsets.ModelViewSet):
#     queryset = Pet.objects.all()
#     serializer_class = PetSerializer

class PetView(CreateRetrieveViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
