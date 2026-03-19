from django.urls import path
from .views import SociListView, GrupListView

urlpatterns = [
    path('', SociListView.as_view(), name='soci-list'),
    path('grups/', GrupListView.as_view(), name='grup-list'),
]
