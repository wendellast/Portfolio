from django.shortcuts import render
from .models import Project

def project_list(request):
    projects = Project.objects.all()
    for project in projects:
        project.tag_list = [tag.strip() for tag in project.tags.split(',')]
    return render(request, 'portfolio.html', {'projects': projects})
