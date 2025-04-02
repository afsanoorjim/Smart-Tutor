from django.contrib.auth import get_user_model
from rest_framework import serializers

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ['id', 'username', 'email', 'password']  # No phone_number field here

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(password)  # Hash the password before saving
        user.save()
        return user
    

