from django.urls import path
from .views import ProtocolListView

urlpatterns = [
    path('', ProtocolListView.as_view(), name='protocol-list'),
]
