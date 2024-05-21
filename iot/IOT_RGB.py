import network   #import des fonction lier au wifi
import urequests	#import des fonction lier au requetes http
import utime	#import des fonction lier au temps
import ujson	#import des fonction lier aà la convertion en Json

from machine import Pin, PWM
import time

pin = [17,18,19]

leds = [PWM(Pin(17, mode=Pin.OUT)),PWM(Pin(18, mode=Pin.OUT)),PWM(Pin(19, mode=Pin.OUT))]

maisons = {"Gryffindor" : [170,0,0],
           "Slytherin" : [0,170,0],
           "Ravenclaw" : [0,0,170],
           "Hufflepuff" : [150,150,0],
           "Off":[0,0,0]}

for i in leds:
    i.freq(1_000)
    i.duty_u16(0)

def off():
    for i in leds:
        i.duty_u16(0)
        
colors = [100,255,170]

def setColor(color):
    index = 0
    for i in color:
        leds[index].duty_u16(i*50)
        index+=1

def FilterHouse(req, maisons):
    for key in maisons:
        if key == req:
            setColor(req)
            break
        else:
            setColor("Off")

wlan = network.WLAN(network.STA_IF)
wlan.active(True)

ssid = '####'
password = '####'


wlan.connect(ssid, password)
url = "####"


while not wlan.isconnected():
    print("pas co")
    utime.sleep(1)
    pass

while(True):
    try:
        print("GET")
        r = urequests.get(url) 
        print(r.json()["house"])
        FilterHouse(r.json()["house"])
        r.close()
        utime.sleep(1)
    except Exception as e:
        print(e)
