from django.contrib import admin
from .models import Grup, GrupLink, Soci


class GrupLinkInline(admin.TabularInline):
    model = GrupLink
    extra = 1


class SociInline(admin.TabularInline):
    model = Soci
    extra = 0
    fields = ['name', 'phone', 'active', 'order']
    show_change_link = True


@admin.register(Grup)
class GrupAdmin(admin.ModelAdmin):
    list_display = ['name', 'active', 'order']
    list_editable = ['active', 'order']
    prepopulated_fields = {'slug': ('name',)}
    inlines = [GrupLinkInline, SociInline]
    fieldsets = (
        ('Informació', {'fields': ('name', 'slug', 'description', 'image')}),
        ('Opcions', {'fields': ('active', 'order')}),
    )


@admin.register(Soci)
class SociAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'grup', 'active', 'order']
    list_editable = ['active', 'order']
    list_filter = ['active', 'grup']
    search_fields = ['name', 'phone']
    filter_horizontal = ['instruments']
    fieldsets = (
        ('Informació', {'fields': ('name', 'phone', 'grup')}),
        ('Instruments', {'fields': ('instruments',)}),
        ('Opcions', {'fields': ('active', 'order')}),
    )
