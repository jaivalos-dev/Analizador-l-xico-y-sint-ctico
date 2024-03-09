from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('upload/', views.upload_file, name='upload_file'),
    path('code/', views.code_file, name='code_file'),
    # path('wiki/', views.wiki, name='wiki'),
]