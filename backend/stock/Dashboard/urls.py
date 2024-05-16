from django.urls import path
from .views import my_watchlist,stock_detail,search_stock,add_stock
urlpatterns = [
    path("list/",my_watchlist,name="mywatchlist"),
    path("add/",add_stock,name="add_stock"),
    path("search/<slug:keyword>",search_stock,name="search"),
    path("detail/<slug:symb>",stock_detail,name="stockdetail"),
]