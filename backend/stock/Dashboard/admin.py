from django.contrib import admin
from .models import TrackedStock

class TrackedStockAdmin(admin.ModelAdmin):
    list_display = ('symbol', 'adder',)

admin.site.register(TrackedStock, TrackedStockAdmin)