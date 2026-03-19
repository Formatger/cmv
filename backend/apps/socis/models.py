from django.db import models
from slugify import slugify
from apps.core.models import TimeStampedModel
from apps.members.models import Instrument


class Grup(TimeStampedModel):
    name = models.CharField('Nom', max_length=255)
    slug = models.SlugField('Slug', max_length=255, unique=True, blank=True)
    description = models.TextField('Descripció', blank=True)
    image = models.ImageField('Imatge', upload_to='grups/', blank=True, null=True)
    active = models.BooleanField('Actiu', default=True)
    order = models.PositiveIntegerField('Ordre', default=0)

    class Meta:
        verbose_name = 'Grup'
        verbose_name_plural = 'Grups'
        ordering = ['order', 'name']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class GrupLink(models.Model):
    grup = models.ForeignKey(Grup, on_delete=models.CASCADE, related_name='links', verbose_name='Grup')
    label = models.CharField('Etiqueta', max_length=100)
    url = models.URLField('URL')

    class Meta:
        verbose_name = 'Enllaç del grup'
        verbose_name_plural = 'Enllaços del grup'
        ordering = ['label']

    def __str__(self):
        return f'{self.grup.name} — {self.label}'


class Soci(TimeStampedModel):
    name = models.CharField('Nom', max_length=255)
    phone = models.CharField('Telèfon', max_length=30, blank=True)
    grup = models.ForeignKey(
        Grup, on_delete=models.SET_NULL, null=True, blank=True,
        related_name='socis', verbose_name='Grup'
    )
    instruments = models.ManyToManyField(Instrument, verbose_name='Instruments', blank=True)
    active = models.BooleanField('Actiu', default=True)
    order = models.PositiveIntegerField('Ordre', default=0)

    class Meta:
        verbose_name = 'Soci'
        verbose_name_plural = 'Socis'
        ordering = ['order', 'name']

    def __str__(self):
        return self.name
