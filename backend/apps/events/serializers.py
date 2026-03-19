from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    is_upcoming = serializers.BooleanField(read_only=True)

    class Meta:
        model = Event
        fields = [
            'id', 'title', 'slug', 'description', 'date', 'location',
            'address', 'image', 'price', 'url_tickets', 'is_upcoming', 'created_at'
        ]
