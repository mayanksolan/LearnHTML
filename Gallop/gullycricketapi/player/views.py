# from django.shortcuts import render
#
# # Create your views here.
#
# from rest_framework import viewsets
#
# from .serializers import PlayerProfileSerializer
# from .models import PlayerProfile
#
#
# class PlayerViewSet(viewsets.ModelViewSet):
#     queryset = PlayerProfile.objects.all().order_by('name')
#     serializer_class = PlayerProfileSerializer
#
#
# class PlayerLogin(viewsets.ModelViewSet):
#     queryset = PlayerProfile.objects

from rest_framework.response import Response
from rest_framework.views import APIView

from .models import PlayerProfile, PlayerSession
from .serializers import PlayerProfileSerializer
from django.shortcuts import get_list_or_404, get_object_or_404
import time
from .Checksum import *


class PlayerRegister(APIView):
    def post(self, request):
        player = request.data
        print(player)
        # Create an article from the above data
        serializer = PlayerProfileSerializer(data=player)
        if serializer.is_valid(raise_exception=True):
            player_saved = serializer.save()
        return Response({"success": "Player '{}' created successfully".format(player_saved.name)})

    # Danger! Comment this method in production as it will show all registered players
    def get(self, request):
        players = PlayerProfile.objects.all().order_by('name')
        serializer_class = PlayerProfileSerializer(players, many=True)
        return Response({"players": serializer_class.data})

class PlayerLogin(APIView):
    def post(self, request):
        playerLogin = request.data
        player = None
        print(playerLogin['userId'])
        print(playerLogin['password'])
        try:
            player = PlayerProfile.objects.get(userId__exact = playerLogin['userId'], password__exact = playerLogin['password'])
            print(player)
        except PlayerProfile.DoesNotExist:
            return Response({"code": "NOK", "message": "User not authenticated: " + playerLogin['userId']})

        # remove any earlier session for new login request
        rows = PlayerSession.objects.get(userId__exact = playerLogin['userId']).delete()
        session = PlayerSession()
        session.userId = playerLogin['userId']
        session.player = player
        session.expiryTime = int(time.time()) + 900
        session.save()
        print(session.sessionId)

        playerSession = PlayerSession.objects.filter(sessionId = session.sessionId).get()
        serializer_class = PlayerProfileSerializer(playerSession.player, many=False)

        return Response({"code": "OK", "player": serializer_class.data, "sessionId":session.sessionId, "expiryTime":session.expiryTime})

class PlayerAuthenticate(APIView):
    def get(self, request):
        playerHome = request.headers
        playerSession = None
        currentTime = int(time.time())
        try:
            playerSession = PlayerSession.objects.get(sessionId = playerHome['sessionId'], expiryTime__gte = currentTime)
        except PlayerSession.DoesNotExist:
            return Response({"code": "LOGGEDOUT"})

        updatedTime = currentTime + 900
        playerSession.expiryTime = updatedTime
        playerSession.save()
        serializer_class = PlayerProfileSerializer(playerSession.player, many=False)
        return Response({"code": "OK", "playerdata": serializer_class.data, "expiryTime": updatedTime, "sessionId":playerSession.sessionId})

class PlayerLogout(APIView):
    def get(self, request):
        playerHome = request.headers
        playerSession = None
        try:
            playerSession = PlayerSession.objects.get(sessionId = playerHome['sessionId'])
        except PlayerSession.DoesNotExist:
            return Response({"code": "ERROR"})

        playerSession.delete()
        return Response({"code": "OK"})

# class PlayerPayMatchFees(APIView):
#     def post(self, request):
#         playerRequest = request.data
#         playerSession = None
#         currentTime = int(time.time())
#         try:
#             playerSession = PlayerSession.objects.get(sessionId = playerRequest['sessionId'], expiryTime__gte = currentTime)
#         except PlayerSession.DoesNotExist:
#             return Response({"code": "LOGGEDOUT"})
#
#         player = playerSession.player
#
#         paytmParams = {
#         	# Find your MID in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
#         	"MID" : "iokTPK19879638694344",
#
#         	# Find your WEBSITE in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
#         	"WEBSITE" : "WEBSTAGING",
#
#         	# Find your INDUSTRY_TYPE_ID in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
#         	"INDUSTRY_TYPE_ID" : "Retail",
#
#         	# WEB for website and WAP for Mobile-websites or App
#         	"CHANNEL_ID" : "WEB",
#
#         	# Enter your unique order id
#         	"ORDER_ID" : playerRequest['sessionId'],
#
#         	# unique id that belongs to your customer
#         	"CUST_ID" : player.userId,
#
#         	# customer's mobile number
#         	"MOBILE_NO" : player.phone,
#
#         	# customer's email
#         	"EMAIL" : player.email,
#
#         	# Amount in INR that is payble by customer
#         	# this should be numeric with optionally having two decimal points
#         	"TXN_AMOUNT" : "10",
#
#         	# on completion of transaction, we will send you the response on this URL
#         	"CALLBACK_URL" : "/verifyPaymentResponse",
#         }
#
#         # Generate checksum for parameters we have
#         # Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
#         checksum = Checksum.generate_checksum(paytmParams, "NPzxB4dBK4AIy1t5")
#
#         # for Staging
#         url = "https://securegw-stage.paytm.in/order/process"
#
#         # for Production
#         # url = "https://securegw.paytm.in/order/process"
#
#         # Prepare HTML Form and Submit to Paytm
#         print('<html>')
#         print('<head>')
#         print('<title>Gully Checkout Page</title>')
#         print('</head>')
#         print('<body>')
#         print('<center><h1>Please do not refresh this page...</h1></center>')
#         print('<form method="post" action="' + url + '" name="paytm_form">')
#         for name, value in paytmParams.items():
#         	print('<input type="hidden" name="' + name + '" value="' + value + '">')
#         print('<input type="hidden" name="CHECKSUMHASH" value="' + checksum + '">')
#         print('</form>')
#         print('<script type="text/javascript">')
#         print('document.paytm_form.submit();')
#         print('</script>')
#         print('</body>')
#         print('</html>')
#
# class PlayerPayMatchFeeResponse(APIView):
#     def post(self, request):
#         paytmChecksum = ""
#         received_data = request.data
#         # Create a Dictionary from the parameters received in POST
#         # received_data should contains all data received in POST
#         paytmParams = {}
#         for key, value in received_data.items():
#         	if key == 'CHECKSUMHASH':
#         		paytmChecksum = value
#         	else:
#         		paytmParams[key] = value
#
#         # Verify checksum
#         # Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
#         isValidChecksum = Checksum.verify_checksum(paytmParams, "NPzxB4dBK4AIy1t5", paytmChecksum)
#         if isValidChecksum:
#             print("Checksum Matched")
#             return Response({"code": "OK"})
#         else:
#             print("Checksum Mismatched")
#             return Response({"code": "PAYMENTFAILURE"})
