from django.shortcuts import render
import os
from dotenv import load_dotenv
load_dotenv()
# Create your views here.
api_key = os.getenv("API_KEY")