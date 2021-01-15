from rest_framework import viewsets, permissions
from .models import Lead
from .serialiazers import LeadSerializers


class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializers
    permission_classes = [
        permissions.AllowAny
    ]




