import asyncio
import aiohttp
import os

secret_key = os.getenv('API_KEY')
async def stock_detailh(symb):
    async with aiohttp.ClientSession() as session:
        key = 'I6AFZPQYPO79QAVP'
        async with session.get(f'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symb}&apikey={key}') as response:
            data = await response.json()
            return data
async def search(keyword):
    async with aiohttp.ClientSession() as session:
        key = 'I6AFZPQYPO79QAVP'
        async with session.get(f'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords={keyword}&apikey={key}') as response:
            data = await response.json()
            return data 