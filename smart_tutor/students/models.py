from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Student(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # The tutor
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return self.name
