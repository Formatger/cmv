from django.db import models
from django.utils import timezone
from slugify import slugify
from apps.core.models import TimeStampedModel


class NewsArticle(TimeStampedModel):
    title = models.CharField('Títol', max_length=255)
    slug = models.SlugField('Slug', max_length=255, unique=True, blank=True)
    excerpt = models.TextField('Resum', blank=True)
    body = models.TextField('Cos')
    image = models.ImageField('Imatge', upload_to='news/', blank=True, null=True)
    published = models.BooleanField('Publicat', default=False)
    pub_date = models.DateTimeField('Data de publicació', blank=True, null=True)

    class Meta:
        verbose_name = 'Notícia'
        verbose_name_plural = 'Notícies'
        ordering = ['-pub_date', '-created_at']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        if self.published and not self.pub_date:
            self.pub_date = timezone.now()
        super().save(*args, **kwargs)
