
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/user/', include('users.urls')),  # Include users app URLs
    path('api/students/', include('students.urls')),
    path('api/payments/', include('payments.urls')),
]
