from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from .models import Event


@admin.register(Event)
class EventAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['title', 'date', 'location', 'published']
    list_filter = ['published', 'date']
    search_fields = ['title', 'description', 'location']
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'date'
    actions = ['publicar', 'despublicar']
    fieldsets = (
        ('Contingut', {'fields': ('title', 'slug', 'description', 'image')}),
        ('Detalls', {'fields': ('date', 'location', 'address', 'price', 'url_tickets')}),
        ('Publicació', {'fields': ('published',)}),
    )

    @admin.action(description='Publicar seleccionats')
    def publicar(self, request, queryset):
        queryset.update(published=True)

    @admin.action(description='Despublicar seleccionats')
    def despublicar(self, request, queryset):
        queryset.update(published=False)
