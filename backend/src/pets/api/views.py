from rest_framework.generics import ListAPIView, RetrieveAPIView
from pets.models import Pet
from .serializers import PetSerializer


class PetListView(ListAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer


class PetDetailView(RetrieveAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
