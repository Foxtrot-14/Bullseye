from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view()
def my_watchlist(request):
    return Response(200,{"Message":"This is from dashoboard"})

@api_view()
def stock_detail(request):
    return Response(200,{"Message":"This is from stock details"})