from django.urls import path
from .views import signup_view,login_view
urlpatterns = [
    path("register/",signup_view,name="signup"),
    path("login/",login_view,name="login"),
]