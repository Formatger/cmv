from django.contrib import admin
from .models import Event


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'location', 'published']
    list_editable = ['published']
    list_filter = ['published', 'date']
    search_fields = ['title', 'description', 'location']
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'date'
    fieldsets = (
        ('Contingut', {'fields': ('title', 'slug', 'description', 'image')}),
        ('Detalls', {'fields': ('date', 'location', 'address', 'price', 'url_tickets')}),
        ('Publicació', {'fields': ('published',)}),
    )
