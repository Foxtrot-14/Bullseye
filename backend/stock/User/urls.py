from django.urls import path
from .views import signup_view,login_view,logout_view,refresh_token
urlpatterns = [
    path("register/",signup_view,name="signup"),
    path("login/",login_view,name="login"),
    path("refresh/",refresh_token,name="refresh"),
    path("logout/",logout_view,name="logout")
]