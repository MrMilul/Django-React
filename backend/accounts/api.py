from .serializers import RegisterSerializer, UserSerializer
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken

class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        ser = self.get_serializer(data=request)
        ser.is_valid(raise_exception=True)
        user = ser.save()

        return Response({
            'user': UserSerializer(user,
             context=self.get_serializer_context()).data, 
            'token': AuthToken.objects.create(user)
        })
