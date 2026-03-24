from rest_framework import generics
from .models import Protocol
from .serializers import ProtocolSerializer


class ProtocolListView(generics.ListAPIView):
    serializer_class = ProtocolSerializer
    pagination_class = None

    def get_queryset(self):
        qs = Protocol.objects.filter(published=True)
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category=category)
        return qs
