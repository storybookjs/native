## Debugging/testing your mobile app

There are a few ways to test your application's support for deep linking and controls without uploading new versions of your application to appetize.

### Using the dev-middleware package

The easiest way to test local changes with your Storybook is to use the [dev-middleware package](packages/dev-middleware)

### Launching your app with deep links

If you are using deep linking, an easy way to test support for this is to just open deep links that your application is set to handle.

This test does not require you to upload anything to appetize.io, but you will not be able to test the end-to-end integration between your application and Storybook Native.

This is fine for most use cases, because you can simply copy the URLs in the "Deep links" addon panel that are sent to your application, and make sure that they work locally with the changes you've made to your application.

On Android, you can configure Android Studio to directly launch your application with a specific URL. You can also use this command from your terminal if you have an emulator running already:

```sh
adb shell 'am start -W -a android.intent.action.VIEW -c android.intent.category.BROWSABLE -d "YOUR_SCHEME://YOUR_HOST?queryParam1=something"'
```

On iOS, you can also run a command from your terminal if you have an emulator running already:

```sh
xcrun simctl openurl booted "YOUR_SCHEME://YOUR_HOST?queryParam1=something"
```

### End to end testing with appetize

If you want to test the end-to-end integration between your mobile application and Storybook Native, you can upload a new test application to appetize.io (instead of updating the existing application), which will give you a new **public key**. Update your stories to use the public key from the test application. Once you are done testing, you can reset your public key to your real application, and delete the test application.

#### References

Credit goes to the author of the [uni_links](https://pub.dev/packages/uni_links) package for the terminal commands mentioned here
