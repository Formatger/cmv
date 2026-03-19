from rest_framework import generics
from .models import NewsArticle
from .serializers import NewsArticleSerializer


class NewsListView(generics.ListAPIView):
    serializer_class = NewsArticleSerializer
    queryset = NewsArticle.objects.filter(published=True)


class NewsDetailView(generics.RetrieveAPIView):
    serializer_class = NewsArticleSerializer
    queryset = NewsArticle.objects.filter(published=True)
    lookup_field = 'slug'
