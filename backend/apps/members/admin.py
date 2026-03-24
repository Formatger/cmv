from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from .models import Instrument, Member


@admin.register(Instrument)
class InstrumentAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


@admin.register(Member)
class MemberAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['name', 'carrec', 'active', 'joined_year']
    list_filter = ['active']
    search_fields = ['name', 'bio', 'carrec']
    actions = ['activar', 'desactivar']
    filter_horizontal = ['instruments']
    fieldsets = (
        ('Informació', {'fields': ('name', 'carrec', 'bio', 'photo')}),
        ('Instruments', {'fields': ('instruments',)}),
        ('Opcions', {'fields': ('active', 'order', 'joined_year')}),
    )

    @admin.action(description='Activar seleccionats')
    def activar(self, request, queryset):
        queryset.update(active=True)

    @admin.action(description='Desactivar seleccionats')
    def desactivar(self, request, queryset):
        queryset.update(active=False)
