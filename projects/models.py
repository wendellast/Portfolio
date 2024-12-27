# projects/models.py
from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='project_images/', blank=True, null=True)  # Permite nulo e opcional
    tags = models.CharField(max_length=255, help_text="Separe as tags por vírgulas")
    website_link = models.URLField(blank=True, null=True)
    github_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name
