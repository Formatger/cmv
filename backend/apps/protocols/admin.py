from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from .models import Protocol


@admin.register(Protocol)
class ProtocolAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['title', 'category', 'published', 'order']
    list_editable = ['published']
    list_filter = ['published', 'category']
    search_fields = ['title', 'description']
    fieldsets = (
        ('Contingut', {'fields': ('title', 'description', 'category', 'file')}),
        ('Publicació', {'fields': ('published', 'order')}),
    )
