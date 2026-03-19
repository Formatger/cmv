from django.contrib import admin
from .models import PageContent


@admin.register(PageContent)
class PageContentAdmin(admin.ModelAdmin):
    list_display = ['page', 'title', 'updated_at']
    fieldsets = (
        ('Contingut', {'fields': ('page', 'title', 'body', 'image')}),
    )
