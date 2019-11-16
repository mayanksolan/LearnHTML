# # player/urls.py
# from django.urls import include, path
# from rest_framework import routers
# from . import views
#
# router = routers.DefaultRouter()
# router.register(r'players', views.PlayerViewSet)
#
# # Wire up our API using automatic URL routing.
# # Additionally, we include login URLs for the browsable API.
# urlpatterns = [
#     path('', include(router.urls)),
#     path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
# ]

from django.urls import path

from .views import PlayerRegister
from .views import PlayerLogin
from .views import PlayerAuthenticate
from .views import PlayerLogout
#from .views import PlayerPayMatchFees
#from .views import PlayerPayMatchFeeResponse


app_name = "players"

# app_name will help us do a reverse look-up latter.
urlpatterns = [
    path('players/', PlayerRegister.as_view()),
    path('login/', PlayerLogin.as_view()),
    path('authenticate/', PlayerAuthenticate.as_view()),
    #path('payfee/', PlayerPayMatchFees.as_view()),
    #path('verifyPaymentResponse/', PlayerPayMatchFeeResponse.as_view()),
    path('logout/', PlayerLogout.as_view()),
]
