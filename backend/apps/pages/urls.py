from django.urls import path
from .views import PageContentDetailView

urlpatterns = [
    path('<str:page>/', PageContentDetailView.as_view(), name='page-detail'),
]
