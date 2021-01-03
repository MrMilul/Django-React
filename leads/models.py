from django.db import models


class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True, max_length=100)
    message = models.CharField(blank=True, null=True, max_length=500)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name



