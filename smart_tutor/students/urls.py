# students/urls.py
from django.urls import path
from .views import StudentListCreateView

urlpatterns = [
    path('students/', StudentListCreateView.as_view(), name='student_list_create'),
]
