from rest_framework import generics
from rest_framework.exceptions import NotFound
from .models import PageContent
from .serializers import PageContentSerializer


class PageContentDetailView(generics.RetrieveAPIView):
    serializer_class = PageContentSerializer

    def get_object(self):
        page = self.kwargs['page']
        try:
            return PageContent.objects.get(page=page)
        except PageContent.DoesNotExist:
            raise NotFound(f"Pàgina '{page}' no trobada.")
