from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view()
def signup_view(request):
    return Response(200,{"message": "This is Sign Up"})

@api_view()
def login_view(request):
    return Response(200,{"message":"This is Login"})