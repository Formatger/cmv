from django.contrib import admin
from .models import Instrument, Member


@admin.register(Instrument)
class InstrumentAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'active', 'order', 'joined_year']
    list_editable = ['active', 'order']
    list_filter = ['active']
    search_fields = ['name', 'bio']
    prepopulated_fields = {'slug': ('name',)}
    filter_horizontal = ['instruments']
    fieldsets = (
        ('Informació', {'fields': ('name', 'slug', 'bio', 'photo')}),
        ('Instruments', {'fields': ('instruments',)}),
        ('Opcions', {'fields': ('active', 'order', 'joined_year')}),
    )
