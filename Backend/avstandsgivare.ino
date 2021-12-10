#include <Wire.h>
#include <AM2320.h>
#include "FirebaseESP8266.h"
#include <ESP8266WiFi.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
#include <VL53L0X.h>

#define FIREBASE_HOST "https://cathome-77c06.firebaseio.com/"
#define FIREBASE_AUTH "bzIF6saVRdgmsCWJa2IvKQXg3RiI9rCZq15fq0X6"
#define WIFI_SSID "EasyPrint"
#define WIFI_PASSWORD "67964178"

VL53L0X sensor;

FirebaseData firebaseData;

String uploaded = "";
String path = "/data";
const long utcOffsetInSeconds = 3600;
int distance = 0;

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", utcOffsetInSeconds);

void setup() {
  Serial.begin(115200);
   Wire.begin(D4, D5);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-fi");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  timeClient.begin(),
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  if (!Firebase.beginStream(firebaseData, path))
  {
      Serial.println("Could not begin stream");
      Serial.println("REASON: " + firebaseData.errorReason());
      Serial.println();
  }
    sensor.setTimeout(500);
  if (!sensor.init())
  {
    Serial.println("Failed to detect and initialize sensor!");
    while (1) {}
  }
  sensor.setMeasurementTimingBudget(200000);
}

void loop() {
 
    timeClient.update();
    uploaded = timeClient.getEpochTime();

    distance = sensor.readRangeSingleMillimeters();

 
    FirebaseJson updateData;
    updateData.set("distance", distance);

    if (Firebase.updateNode(firebaseData, "/data/" + uploaded, updateData)) {
      Serial.println(firebaseData.jsonString()); 
      }
      else {
        Serial.println(firebaseData.errorReason());
        }
   
      delay(10*1000);
} 
