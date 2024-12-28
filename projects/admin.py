from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'website_link', 'github_link')
    search_fields = ('name', 'tags')
    list_filter = ('tags',)
