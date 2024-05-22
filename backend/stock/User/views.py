from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings
from .models import User
import jwt
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
@api_view(['POST'])
def signup_view(request):
    email = request.data.get('email')
    password1 = request.data.get('password1')
    password2 = request.data.get('password2')

    if password1 != password2:
        return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)
    
    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)
    user = User.objects.create(
        email=email,
        password=make_password(password2)
    )
    return Response({'success': 'User registered successfully'}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    user = authenticate(request, email=email, password=password)

    if user is not None:
        
        refresh = RefreshToken.for_user(user)
        return Response({
            'success': 'Login successful',
            'access': str(refresh.access_token),
            'refresh': str(refresh),
        }, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
    
@api_view(['POST'])
def refresh_token(request):
    refresh_token = request.data.get('refresh')
    payload = jwt.decode(refresh_token,settings.SECRET_KEY, algorithms=['HS256'])
    if payload is None:
        return Response({'error': 'Invalid or expired refresh token'}, status=status.HTTP_401_UNAUTHORIZED)
    id = payload.get('user_id')
    if id is not None:
        user = User.objects.get(id=id)
        refresh = RefreshToken.for_user(user)
        return Response({
            'success': 'Refresh successful',
            'access': str(refresh.access_token),
            'refresh': str(refresh),
        }, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid Refresh Token'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def logout_view(request):
    try:
        refresh_token = request.data["refresh_token"]
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response({'msg':'Logged Out Successfully'},status=204)
    except Exception as e:
        return Response(status=400)