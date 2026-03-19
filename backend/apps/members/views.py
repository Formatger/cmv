from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .models import Member
from .serializers import MemberSerializer


class NoPagination(PageNumberPagination):
    page_size = None


class MemberListView(generics.ListAPIView):
    serializer_class = MemberSerializer
    queryset = Member.objects.filter(active=True).prefetch_related('instruments')
    pagination_class = NoPagination
