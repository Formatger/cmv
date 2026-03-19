from django.db import models
from apps.core.models import TimeStampedModel


class PageContent(TimeStampedModel):
    PAGE_CHOICES = [
        ('home', 'Inici'),
        ('about', 'Sobre nosaltres'),
    ]

    page = models.CharField('Pàgina', max_length=20, choices=PAGE_CHOICES, unique=True)
    title = models.CharField('Títol', max_length=255)
    body = models.TextField('Cos')
    image = models.ImageField('Imatge', upload_to='pages/', blank=True, null=True)

    class Meta:
        verbose_name = 'Contingut de pàgina'
        verbose_name_plural = 'Continguts de pàgines'

    def __str__(self):
        return self.get_page_display()
