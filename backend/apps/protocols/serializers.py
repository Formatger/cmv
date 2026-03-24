from rest_framework import serializers
from .models import Protocol


class ProtocolSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = Protocol
        fields = ['id', 'title', 'description', 'category', 'category_display', 'file', 'order']
