from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/news/', include('apps.news.urls')),
    path('api/events/', include('apps.events.urls')),
    path('api/members/', include('apps.members.urls')),
    path('api/pages/', include('apps.pages.urls')),
    path('api/socis/', include('apps.socis.urls')),
    path('api/protocols/', include('apps.protocols.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
