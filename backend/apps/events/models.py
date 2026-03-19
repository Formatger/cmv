from django.db import models
from django.utils import timezone
from slugify import slugify
from apps.core.models import TimeStampedModel


class Event(TimeStampedModel):
    title = models.CharField('Títol', max_length=255)
    slug = models.SlugField('Slug', max_length=255, unique=True, blank=True)
    description = models.TextField('Descripció', blank=True)
    date = models.DateTimeField('Data i hora')
    location = models.CharField('Lloc', max_length=255)
    address = models.CharField('Adreça', max_length=255, blank=True)
    image = models.ImageField('Imatge', upload_to='events/', blank=True, null=True)
    price = models.DecimalField('Preu (€)', max_digits=6, decimal_places=2, blank=True, null=True)
    url_tickets = models.URLField('URL entrades', blank=True)
    published = models.BooleanField('Publicat', default=False)

    class Meta:
        verbose_name = 'Esdeveniment'
        verbose_name_plural = 'Esdeveniments'
        ordering = ['date']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    @property
    def is_upcoming(self):
        return self.date >= timezone.now()
