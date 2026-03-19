from django.db import models
from slugify import slugify
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
    slug = models.SlugField('Slug', max_length=255, unique=True, blank=True)
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

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
