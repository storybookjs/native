# flutter_storybook

A Flutter application demonstrating appetize.io parameter passing for Android.

iOS is left as an exercise if you follow the guide below.


## Storybook and Appetize
You can pass parameters into an appetize.io app container through a URL parameter to command the app to startup on a specific page.

Storybook links can contain this plain text parameters so that it can pass into appetize.io and then into your app startup.
Your app can then parse the data and switch to a desired page to display some native designs.
In this example Android app, the URL sent to appetize is of the form:

https://appetize.io/app/APP_PUBLIC_KEY?params=CUSTOM_PARAMETERS&device=nexus5&scale=75&orientation=portrait&osVersion=8.1&deviceColor=white

where CUSTOM_PARAMETERS is a text string like {"page":"button"} base64 encoded to %7B%page%22:%22button%227D and APP_PUBLIC_KEY is your app's public key for appetize.io use.

## Setup
[This guide](https://flutter.dev/docs/get-started/flutter-for/android-devs#how-do-i-handle-incoming-intents-from-external-applications-in-flutter) was used for the Android and Flutter code.
iOS can follow this guide as well.

### Android native
Two pieces of Android native code are needed in the Android manifest and MainActivity.

The Android Manifest (See android/app/src/main/AndroidManifest.xml) needs it's main activity to alert the system to pass plain text data from the URL into this app.

MainActivity (See android/app/src/main/kotlin/flutter/company/com/flutter_storybook/MainActivity.kt) needs to add a platform channel and wait for Flutter to ask for the plain text data before sending it back.

### Flutter
The MainActivity (See lib/main.dart) needs a way to request the plain text from Android. The guide was useful but a bit out of date.
The line "GeneratedPluginRegistrant.registerWith(this);" is now removed in Flutter 1.20.3.

## Local testing
You can use the Android adb commands to send in plain text to launch your app. Multiple apps handle plain text so you will be able to select which app you want after issuing the adb command.

Issue a command in a terminal like so:

``
adb shell 'am start -a "android.intent.action.SEND" --es "android.intent.extra.TEXT" "{\"page\":\"button\"}" -t "text/plain"'
``

This will launch the app in your emulator, you select the app name you created, and that app will launch and receive the plain text.
