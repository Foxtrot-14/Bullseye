import asyncio
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .utils import stock_detailh,search
import os
from asgiref.sync import async_to_sync
from .models import TrackedStock
from .serializers import TrackedStockSerializer
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_watchlist(request):
    print(request.headers)
    user = request.user
    data = TrackedStock.objects.filter(adder=user)
    if data.exists():
        serializer = TrackedStockSerializer(data,many=True)
        return Response({"data":serializer.data},status=status.HTTP_200_OK)
    else:
        return Response({"message":"Watchlist Empty"},status=status.HTTP_404_NOT_FOUND)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_stock(request):
    symb = request.data.get("symbol")
    user = request.user
    tracked_stock = TrackedStock(symbol=symb, adder=user)
    try:
        tracked_stock.save()
        return Response({"message": "TrackedStock created successfully"}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def stock_detail(request, symb):
    data = asyncio.run(stock_detailh(symb))
    return Response({"data": data}, status=status.HTTP_200_OK)

@api_view(['GET'])
def search_stock(request, keyword):
    data = asyncio.run(search(keyword))
    return Response({"data": data}, status=status.HTTP_200_OK)