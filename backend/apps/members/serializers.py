from rest_framework import serializers
from .models import Instrument, Member


class InstrumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instrument
        fields = ['id', 'name']


class MemberSerializer(serializers.ModelSerializer):
    instruments = InstrumentSerializer(many=True, read_only=True)

    class Meta:
        model = Member
        fields = ['id', 'name', 'carrec', 'bio', 'photo', 'instruments', 'order', 'joined_year']
