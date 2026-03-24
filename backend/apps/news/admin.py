from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from .models import NewsArticle


@admin.register(NewsArticle)
class NewsArticleAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['title', 'published', 'pub_date', 'created_at']
    list_filter = ['published', 'pub_date']
    search_fields = ['title', 'excerpt', 'body']
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'pub_date'
    actions = ['publicar', 'despublicar']
    fieldsets = (
        ('Contingut', {'fields': ('title', 'slug', 'excerpt', 'body', 'image')}),
        ('Publicació', {'fields': ('published', 'pub_date')}),
    )

    @admin.action(description='Publicar seleccionades')
    def publicar(self, request, queryset):
        queryset.update(published=True)

    @admin.action(description='Despublicar seleccionades')
    def despublicar(self, request, queryset):
        queryset.update(published=False)
