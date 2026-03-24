from django.db import models
from apps.core.models import TimeStampedModel


class Protocol(TimeStampedModel):
    CATEGORY_CHOICES = [
        ('sala', 'Ús de sales'),
        ('normes', 'Normativa general'),
        ('formularis', 'Formularis'),
        ('altres', 'Altres'),
    ]

    title = models.CharField('Títol', max_length=255)
    description = models.TextField('Descripció', blank=True)
    category = models.CharField('Categoria', max_length=20, choices=CATEGORY_CHOICES, default='sala')
    file = models.FileField('Arxiu', upload_to='protocols/')
    published = models.BooleanField('Publicat', default=True)
    order = models.PositiveIntegerField('Ordre', default=0)

    class Meta:
        verbose_name = 'Protocol / Manual'
        verbose_name_plural = 'Protocols i Manuals'
        ordering = ['order', 'title']

    def __str__(self):
        return self.title
