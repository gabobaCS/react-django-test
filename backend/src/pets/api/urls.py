from django.urls import path
from .views import PetListView, PetDetailView

urlpatterns = [
    path('', PetListView.as_view()),
    path('<pk>', PetDetailView.as_view())
]
