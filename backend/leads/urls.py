from django.urls import path
from rest_framework import routers
from .api import LeadViewSet


router = routers.DefaultRouter()
router.register('api/lead', LeadViewSet, 'lead')

urlpatterns = []

urlpatterns += router.urls
