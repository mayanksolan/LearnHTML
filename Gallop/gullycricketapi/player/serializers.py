# from rest_framework import serializers
#
# from .models import PlayerProfile
#
# class PlayerProfileSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = PlayerProfile
#         fields = ('name',
#                     'userId',
#                     'email',
#                     'phone',
#                     'password',
#                     'gender',
#                     'dateofbirth',
#                     'city',
#                     'state',
#                     'country',
#                     'battingarm',
#                     'bowlingarm')

from rest_framework import serializers
from .models import PlayerProfile


class PlayerProfileSerializer(serializers.Serializer):
    name            = serializers.CharField(max_length=250)
    userId          = serializers.CharField(max_length=60)
    email           = serializers.EmailField()
    phone           = serializers.CharField(max_length=10)
    password        = serializers.CharField(max_length=60)
    gender          = serializers.CharField(max_length=10)
    dateofbirth     = serializers.CharField(max_length=60)
    city            = serializers.CharField(max_length=60)
    state           = serializers.CharField(max_length=60)
    country         = serializers.CharField(max_length=60)
    battingarm      = serializers.CharField(max_length=10)
    bowlingarm      = serializers.CharField(max_length=10)

    def create(self, validated_data):
        return PlayerProfile.objects.create(**validated_data)
