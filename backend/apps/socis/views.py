from rest_framework import generics
from .models import Grup, Soci
from .serializers import GrupSerializer, SociSerializer


class SociListView(generics.ListAPIView):
    serializer_class = SociSerializer
    pagination_class = None

    def get_queryset(self):
        return Soci.objects.filter(active=True).select_related('grup')


class GrupListView(generics.ListAPIView):
    serializer_class = GrupSerializer
    pagination_class = None
    queryset = Grup.objects.filter(active=True).prefetch_related('links', 'socis', 'socis__instruments')
