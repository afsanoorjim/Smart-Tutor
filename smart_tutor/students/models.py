from django.db import models

# Create your models here.
# students/models.py
from django.db import models
from django.contrib.auth.models import User
class Student(models.Model):
    user = models.ForeignKey(User, related_name='students', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15, blank=True, null=True)  # Optional
    enrolled_courses = models.TextField()  # You can use a Many-to-Many field for courses if needed

    def __str__(self):
        return self.name
    
# students/models.py
class Payment(models.Model):
    student = models.ForeignKey(Student, related_name='payments', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateField()

    def __str__(self):
        return f"Payment of {self.amount} from {self.student.name}"
