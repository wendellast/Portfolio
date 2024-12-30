from django.urls import path
from . import views

app_name = "portfolio"

urlpatterns = [
    path('', views.ProjectListView.as_view(), name='home'),
    path('load-projects/', views.load_projects, name='load_projects'),
    path('success-email/', views.PageSuccess.as_view(), name='success'),
]
