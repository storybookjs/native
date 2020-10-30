# Storybook Native

This module is a build tool that allows creation of stories to view components inside of Android and iOS native applications easily inside of storybook. The intended purpose is for native developers to be able to quickly get started with storybook without having to learn how to write extensive amounts of JavaScript, and without having to learn how to use storybook.

## Installation
`npm install @storybook/native`
or
`yarn add @storybook/native`

## How it works
Storybook Native uses [appetize.io](https://appetize.io/) to render your mobile application in an emulator that can be interacted with from your browser. 

There are 2 ways to handle switching between stories:

### 1. Deep Linking
If your application is set to open up when the user requests a certain URL, you can use deep linking with storybook native. This approach is recommended over launch parameters, because you do not have to wait for the appetize.io session to reload when switching between stories.

In your application, you must add handlers that determines what to render based on what the query parameters for the deep link URL are.

Example URL:
```
sb-native://deep.link?component=button&theme=dark
```

If you wanted to use those query parameters, your application would need to parse the value associated with the  `component` query parameter, and then render the corresponding component (in this case, a button component). Your application would also need to request either light or dark mode based on what the value of the `theme` query parameter is.

*You do not need to exactly follow the above example for your query parameters! Your query parameters can have any information that you want.*

Examples of parsing query parameters:
 - [Android - parsing intents](examples/android-material-ui/app/app/src/main/java/com/intuit/august2020/storybookdemoapp/MainActivity.kt#L32)

You can read more about how to setup deep linking for Android [here](https://developer.android.com/training/app-links/deep-linking). Deep linking should also work on iOS and Flutter, but there are no examples for this yet.

### 2. Launch Parameters
appetize.io allows you to pass in custom launch parameters which will be sent to your mobile application when it first starts up. In your application, you must create a handler that determines what to render based on what those launch parameters are.  
  
Example launch parameters:
```json
{
  "component": "button",
  "theme": "dark"
}
```
If you wanted to use those launch parameters, your application would need to parse the value associated with the  `component` key, and then render the corresponding component (in this case, a button component). Your application would also need to request either light or dark mode based on what the value of `theme` is.

*You do not need to exactly follow the above example for your launch parameters! Your launch parameters object can have any information that you want.*

Examples of parsing launch parameters:
 - [Android](examples/android-material-ui/app/app/src/main/java/com/intuit/august2020/storybookdemoapp/MainActivity.kt#L29)
 - [Flutter](examples/flutter/app/lib/main.dart#L73)
 - [iOS](examples/ios-material-ui/app/iOSStoryBookDemo/iOSStoryBookDemo/AppDelegate.swift#L66)

More details about these parameters can be found in the [bottom of the appetize.io docs](https://docs.appetize.io/core-features/playback-options)

## Usage
After you have modified your application to support launch parameters or query parameters, you must upload your application to appetize.io. After the upload, you will receive a public key that can be used with Storybook Native to view your application directly in storybook.

To use this module, you must create a node script [such as this example one](examples/android-material-ui/generate.js) that imports `generateStories` from this module. Pass in details about stories that you want this module to generate. Each call to `generateStories` generates a file that contains stories generated from the information you pass in. Run `yarn start-storybook` to view those stories in a local storybook instance, or run `yarn build-storybook` to build a static storybook that can be uploaded as a web page.

You must also have a `.storybook` folder with a `main.js` file inside of it, where you must configure the path to your stories, as well as any addons you want to use. The `@storybook/addon-docs` and `@storybook/addon-controls` addons must always be included. The `@storybook/native-addon` addon is required if you want to be able to rotate the emulator, or capture screenshots. [Here](examples/android-material-ui/.storybook/main.js) is an example of a valid `main.js` file.

If you are using deep linking, your `.storybook` folder MUST also have a `preview-body.html` that declares an iframe element with the id `appetize-iframe`. One example of this file [can be found here](examples/android-material-ui-deep-link/.storybook/preview-body.html). There is currently an issue where the appetize iframe still gets displayed when in the `docs` panel. A temporary workaround is to create a `preview-head.html` file in your `.storybook` folder with the following contents:
```html
<style>
  #docs-root {
    position: absolute;
    z-index: 1;
    top: 0;
  }
</style>
```

### Examples
Examples of how to use this module can be found [in this folder](examples/). The `app` folder inside each example contains the source code of the application the example is for.

- [Android storybook with deep linking](https://5f99b8bcfe88ac0022fcf70e-rqxuhyxazi.chromatic.com/)
- [Android storybook with launch parameters](https://5f99b8bcfe88ac0022fcf70e-uqmnpmxiue.chromatic.com/)
- [Flutter storybook with launch parameters](https://5f99b8bcfe88ac0022fcf70e-zkykyigdhc.chromatic.com/)
- [iOS storybook with launch parameters](https://5f99b8bcfe88ac0022fcf70e-bkrwusstqb.chromatic.com/)

### Parameters for `generateStories`
 - category: The group/category that the specified stories will fall under
 - filePath: The path to write the file that contains the generated stories
 - apiKey: Your application's public key that you received from appetize.io
 - platform: What platform your app is running on ("ios" or "android")
 - stories: A list of stories to generate, where each story is an object represented with the following keys:
   - name: The name of the story
   - appParams: Either an object that gets passed to your application when it first launches, or an object representing query string parameters for deep linking. This is what is used to determine which component or page to load in your application, and it can also be used to handle other logic such as theming.
   - docs (optional): Documentation that you want to show up in the storybook docs panel
 - deepLinkUrl: An optional base URL that is required only if you are using deep linking. Your application must be set to handle incoming URLs for this host (example: sb-native://deep.link)

## Local development
 - Clone this repo
 - Run yarn to install dependencies
 - `yarn build && cd examples/android-material-ui && yarn start`  
Anytime changes are made, yarn build and start must be re-run
