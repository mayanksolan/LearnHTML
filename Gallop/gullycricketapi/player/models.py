import uuid
from django.db import models

# Create your models here.

class PlayerProfile(models.Model):
    name            = models.CharField(max_length=250)
    userId          = models.CharField(max_length=60)
    userId          = models.CharField(max_length=60)
    email           = models.EmailField()
    phone           = models.CharField(max_length=10)
    password        = models.CharField(max_length=60)
    gender          = models.CharField(max_length=10)
    dateofbirth     = models.CharField(max_length=60)
    city            = models.CharField(max_length=60)
    state           = models.CharField(max_length=60)
    country         = models.CharField(max_length=60)
    battingarm      = models.CharField(max_length=10)
    bowlingarm      = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class PlayerSession(models.Model):
    player = models.OneToOneField(
        PlayerProfile,
        on_delete=models.CASCADE
    )
    sessionId       = models.UUIDField(default=uuid.uuid4, editable=False)
    userId          = models.CharField(primary_key = True, max_length=60)
    expiryTime      = models.BigIntegerField()

    def __str__(self):
        return "%s session" % self.player.name
