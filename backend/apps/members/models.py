from django.db import models
from apps.core.models import TimeStampedModel


class Instrument(models.Model):
    name = models.CharField('Nom', max_length=100, unique=True)

    class Meta:
        verbose_name = 'Instrument'
        verbose_name_plural = 'Instruments'
        ordering = ['name']

    def __str__(self):
        return self.name


class Member(TimeStampedModel):
    name = models.CharField('Nom', max_length=255)
    carrec = models.CharField('Càrrec', max_length=255, blank=True)
    bio = models.TextField('Biografia', blank=True)
    photo = models.ImageField('Foto', upload_to='members/', blank=True, null=True)
    instruments = models.ManyToManyField(Instrument, verbose_name='Instruments', blank=True)
    active = models.BooleanField('Actiu', default=True)
    order = models.PositiveIntegerField('Ordre', default=0)
    joined_year = models.PositiveIntegerField('Any d\'incorporació', blank=True, null=True)

    class Meta:
        verbose_name = 'Membre'
        verbose_name_plural = 'Membres'
        ordering = ['order', 'name']

    def __str__(self):
        return self.name

