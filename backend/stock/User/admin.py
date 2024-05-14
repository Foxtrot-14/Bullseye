from django.contrib import admin
from .models import User

class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email',)  # Display fields in the admin list view

admin.site.register(User, UserAdmin)
