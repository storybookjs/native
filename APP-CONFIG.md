## Configuring your mobile application

Your android or iOS app needs to be modified to handle switching between stories. There are 2 ways to handle this:

### 1. Deep Linking

If your application is set to open up when the user requests a certain URL, you can use deep linking with storybook native. This approach is recommended over launch parameters, because you do not have to wait for the appetize.io session to reload when switching between stories.

In your application, you must add handlers that determines what to render based on what the query parameters for the deep link URL are.

Example URL:

```
sb-native://deep.link?component=button&theme=dark
```

If you wanted to use those query parameters, your application would need to parse the value associated with the `component` query parameter, and then render the corresponding component (in this case, a button component). Your application would also need to request either light or dark mode based on what the value of the `theme` query parameter is.

_You do not need to exactly follow the above example for your query parameters! Your query parameters can have any information that you want._

Examples of parsing query parameters:

-   [Android](examples/android-material-ui/app/app/src/main/java/com/intuit/august2020/storybookdemoapp/MainActivity.kt#L42)
-   [iOS](examples/ios-material-ui/app/iOSStoryBookDemo/iOSStoryBookDemo/AppDelegate.swift#L83)
-   [Flutter](examples/flutter/app/lib/main.dart#L60)

You can read more about how to setup deep linking for Android [here](https://developer.android.com/training/app-links/deep-linking).

For iOS, [this article](https://medium.com/wolox/ios-deep-linking-url-scheme-vs-universal-links-50abd3802f97) explains how to set up deep linking. Note that for the examples in this repo, we use URL schemes instead of Universal Links since they are simpler to set up.

For Flutter, the [uni_links](https://pub.dev/packages/uni_links) package makes it easy to set up deep linking support for both Android and iOS.

### 2. Launch Parameters

appetize.io allows you to pass in custom launch parameters which will be sent to your mobile application when it first starts up. In your application, you must create a handler that determines what to render based on what those launch parameters are.

Example launch parameters:

```json
{
    "component": "button",
    "theme": "dark"
}
```

If you wanted to use those launch parameters, your application would need to parse the value associated with the `component` key, and then render the corresponding component (in this case, a button component). Your application would also need to request either light or dark mode based on what the value of `theme` is.

_You do not need to exactly follow the above example for your launch parameters! Your launch parameters object can have any information that you want._

Examples of parsing launch parameters:

-   [Android](examples/android-material-ui/app/app/src/main/java/com/intuit/august2020/storybookdemoapp/MainActivity.kt#L38)
-   [iOS](examples/ios-material-ui/app/iOSStoryBookDemo/iOSStoryBookDemo/AppDelegate.swift#L66)

More details about these parameters can be found in the [bottom of the appetize.io docs](https://docs.appetize.io/core-features/playback-options)
