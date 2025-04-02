# students/serializers.py
from rest_framework import serializers
from .models import Student
from .models import Payment


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'name', 'email', 'phone_number', 'subject']
        
# students/serializers.py
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id', 'student', 'amount', 'payment_date']
