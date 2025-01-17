from django.db import models

class Stacks(models.TextChoices):
    Web = "WEB APLICATION", "Web Aplication"
    Mobile = "MOBILE APLICATION", "Mobile Aplication"
    Desktop = "DESKTOP APLICATION", "Desktop Aplication"


class Project(models.Model):
    name = models.CharField(max_length=100)
    stacks = models.CharField(max_length=20, choices=Stacks.choices, default=Stacks.Web)
    description = models.TextField()
    image = models.ImageField(upload_to='project_images/', blank=True, null=True)
    tags = models.CharField(max_length=255, help_text="Separe as tags por vírgulas")
    website_link = models.URLField(blank=True, null=True)
    github_link = models.URLField(blank=True, null=True)
    integer_field = models.IntegerField(help_text="Ordem projeto", blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Resume(models.Model):
    project = models.OneToOneField('Project', on_delete=models.CASCADE, related_name='resume')
    file = models.FileField(upload_to='resumes/')
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"Resume for {self.project.name}"
