from rest_framework import viewsets, permissions
from .models import Lead
from .serialiazers import LeadSerializers


class LeadViewSet(viewsets.ModelViewSet):
    serializer_class = LeadSerializers
    permission_classes = [permissions.IsAuthenticated]


    def get_queryset(self):
        return self.request.user.Lead.all() 
    
    def perform_create(self, serializer):
        serializer.save(owner = self.request.user)
        

