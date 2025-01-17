from .models import Project
from django.views.generic import ListView
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.db.models import Value
from django.db.models.functions import Coalesce


class ProjectListView(ListView):
    model = Project
    template_name = 'portfolio.html'
    context_object_name = 'projects'

    def get_queryset(self):

        queryset = (
            super()
            .get_queryset()
            .annotate(
                integer_field_order=Coalesce('integer_field', Value(9999))
            )
            .order_by('integer_field_order')
        )

        for project in queryset:
            project.tag_list = [tag.strip() for tag in project.tags.split(',')]
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context['projects'] = self.get_queryset()[:6]
        return context


def load_projects(request):
    page = request.GET.get('page', 1)

    projects = Project.objects.annotate(
        integer_field_order=Coalesce('integer_field', Value(9999))
    ).order_by('integer_field_order')

    paginator = Paginator(projects, 6)  # 6 projetos por página

    try:
        projects_page = paginator.page(page)
    except Exception:
        return JsonResponse({'error': 'Página inválida'}, status=400)


    projects_list = [
        {
            'name': project.name,
            'description': project.description,
            'image_url': project.image.url if project.image else '',
            'website_link': project.website_link,
            'github_link': project.github_link,
            'tags': [tag.strip() for tag in project.tags.split(',')]
        }
        for project in projects_page
    ]

    return JsonResponse({
        'projects': projects_list,
        'has_next': projects_page.has_next(),
        'has_previous': projects_page.has_previous()
    })


class PageSuccess(ListView):
    model = Project
    context_object_name = "projects"
    template_name = "success.html"
