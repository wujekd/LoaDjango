from django.urls import path
from . import views

app_name = "ajax"

urlpatterns = [
    path('', views.ajax, name = "index"),
    path("getProfiles/", views.getData, name ="getData"),
    path("test/", views.test, name = "test"),
]
