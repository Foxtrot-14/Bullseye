import asyncio
import aiohttp
import os

secret_key = os.getenv('API_KEY')
key = '7H1W75L677FY0UJH'
async def stock_detailh(symb):
    async with aiohttp.ClientSession() as session:
        async with session.get(f'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symb}&apikey={key}') as response:
            data = await response.json()
            return data
async def search(keyword):
    async with aiohttp.ClientSession() as session:
        async with session.get(f'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords={keyword}&apikey={key}') as response:
            data = await response.json()
            return data 