from django.contrib import admin
from .models import NewsArticle


@admin.register(NewsArticle)
class NewsArticleAdmin(admin.ModelAdmin):
    list_display = ['title', 'published', 'pub_date', 'created_at']
    list_editable = ['published']
    list_filter = ['published', 'pub_date']
    search_fields = ['title', 'excerpt', 'body']
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'pub_date'
    fieldsets = (
        ('Contingut', {'fields': ('title', 'slug', 'excerpt', 'body', 'image')}),
        ('Publicació', {'fields': ('published', 'pub_date')}),
    )
