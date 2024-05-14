from django.db import models

class TrackedStock(models.Model):
    symbol = models.CharField(max_length=50)
    adder = models.ForeignKey("User.User", verbose_name="Adder", on_delete=models.CASCADE)
    class Meta:
        unique_together = ("symbol", "adder")
