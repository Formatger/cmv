from rest_framework import serializers
from .models import NewsArticle


class NewsArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsArticle
        fields = ['id', 'title', 'slug', 'excerpt', 'body', 'image', 'pub_date', 'created_at']
