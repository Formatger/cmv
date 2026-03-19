from rest_framework import serializers
from apps.members.serializers import InstrumentSerializer
from .models import Grup, GrupLink, Soci


class GrupLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrupLink
        fields = ['id', 'label', 'url']


class SociSerializer(serializers.ModelSerializer):
    instruments = InstrumentSerializer(many=True, read_only=True)
    grup_name = serializers.CharField(source='grup.name', read_only=True, default=None)

    class Meta:
        model = Soci
        fields = ['id', 'name', 'phone', 'grup', 'grup_name', 'instruments', 'order']


class GrupSerializer(serializers.ModelSerializer):
    links = GrupLinkSerializer(many=True, read_only=True)
    socis = SociSerializer(many=True, read_only=True)

    class Meta:
        model = Grup
        fields = ['id', 'name', 'slug', 'description', 'image', 'links', 'socis', 'order']
