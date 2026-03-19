from django.utils import timezone
from rest_framework import generics
from .models import Event
from .serializers import EventSerializer


class EventListView(generics.ListAPIView):
    serializer_class = EventSerializer

    def get_queryset(self):
        qs = Event.objects.filter(published=True)
        upcoming = self.request.query_params.get('upcoming')
        if upcoming == 'true':
            qs = qs.filter(date__gte=timezone.now())
        elif upcoming == 'false':
            qs = qs.filter(date__lt=timezone.now()).order_by('-date')
        return qs


class EventDetailView(generics.RetrieveAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.filter(published=True)
    lookup_field = 'slug'
