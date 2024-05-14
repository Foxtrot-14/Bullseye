from django.urls import path
from .views import my_watchlist,stock_detail
urlpatterns = [
    path("dashboard/",my_watchlist,name="mywatchlist"),
    path("detail/<slug:id>",stock_detail,name="stockdetail"),
]
