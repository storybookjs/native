## Debugging/testing your mobile application

There are a few ways to test your application's support for deep linking and controls without uploading new versions of your application to appetize.

### Launching your app with deep links

This test does not require you to upload anything to appetize.io, but you will not be able to test the end-to-end integration between your application and Storybook Native

If you are using deep linking, the easiest way to to test support for this is to just open deep links that your application is set to handle.

On Android, you can configure Android Studio to directly launch your application with a specific URL. You can also use this command from your terminal if you have an emulator running already:

```sh
adb shell 'am start -W -a android.intent.action.VIEW -c android.intent.category.BROWSABLE -d "YOUR_SCHEME://YOUR_HOST?queryParam1=something"'
```

On iOS, you can also run a command from your terminal if you have an emulator running already:

```sh
/usr/bin/xcrun simctl openurl booted "YOUR_SCHEME://YOUR_HOST?queryParam1=something"
```

### End to end testing

If you want to test the end-to-end integration between your mobile application and Storybook Native, you can upload a new test application to appetize.io (instead of updating the existing application), which will give you a new **public key**. Update your stories to use the public key from the test application. Once you are done testing, you can reset your public key to your real application, and delete the test application.

#### References

Credit goes to the author of the [uni_links](https://pub.dev/packages/uni_links) package for the terminal commands mentioned here
