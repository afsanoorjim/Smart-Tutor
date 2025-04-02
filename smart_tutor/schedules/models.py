from django.db import models

from students.models import Student

class StudentSchedule(models.Model):
    student = models.ForeignKey(Student, related_name='schedules', on_delete=models.CASCADE)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    subject = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.student.name} - {self.subject} on {self.date}"
