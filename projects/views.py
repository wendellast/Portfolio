from .models import Project
from django.views.generic import ListView


class ProjectListView(ListView):
    model = Project
    template_name = 'portfolio.html'
    context_object_name = 'projects'

    def get_queryset(self):
        queryset = super().get_queryset()
        for project in queryset:
            project.tag_list = [tag.strip() for tag in project.tags.split(',')]
        return queryset

class PageSuccess(ListView):
    model = Project
    context_object_name = "projects"
    template_name = "success.html"