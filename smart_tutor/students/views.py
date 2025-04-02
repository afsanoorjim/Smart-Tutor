from django.shortcuts import render

# Create your views here.
# students/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Student
from .serializers import *
from models import *
class StudentListCreateView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]  # Ensure only authenticated tutors can add/view students

    def perform_create(self, serializer):
        student_id = self.request.data.get('student')  # Get the student ID from the request
        student = Student.objects.get(id=student_id)
        serializer.save(user=self.request.user)  # Associate the student with the tutor
# students/views.py
class PaymentView(generics.ListCreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        student_id = self.request.data.get('student')  # Get the student ID from the request
        student = Student.objects.get(id=student_id)
        serializer.save(student=student)  # Associate the payment with the student
