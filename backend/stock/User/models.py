from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField( max_length=254,unique=True)
    password = models.CharField( max_length=50)
    
    def __str__(self):
        return self.email