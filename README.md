# Storybook Native

This module is a build tool that allows creation of stories to view components inside of Android and iOS native applications easily inside of storybook. The intended purpose is for native developers to be able to quickly get started with storybook without having to learn how to write extensive amounts of JavaScript, and without having to learn how to use storybook.

## Installation
`npm install @storybook/native`
or
`yarn add @storybook/native`

## How it works
Storybook Native uses [appetize.io](https://appetize.io/) to render your mobile application in an emulator that can be interacted with from your browser. appetize.io allows you to pass in custom launch arguments which will be sent to your mobile application when it first starts up. In your application, you must create a handler that determines what to render based on what those launch arguments are.  
  
Example launch arguments:
```json
{
  "component": "button",
  "theme": "dark"
}
```
If you wanted to use those launch arguments, your application would need to parse the value associated with the  `component` key, and then render the corresponding component (in this case, a button component). Your application would also need to request either light or dark mode based on what the value of `theme` is.

*You do not need to exactly follow the above example for your launch arguments! Your launch arguments object can have any information that you want.*

Examples of parsing launch arguments:
 - [Android - parsing intents](examples/android-material-ui/app/app/src/main/java/com/intuit/august2020/storybookdemoapp/MainActivity.kt#L27)
 - [Flutter](examples/flutter/app/lib/main.dart#L73)
 - [iOS](examples/ios-material-ui/app/iOSStoryBookDemo/iOSStoryBookDemo/AppDelegate.swift#L66)

More details about these arguments can be found in the [appetize.io docs](https://docs.appetize.io/core-features/playback-options)

After you have modified your application to support these launch arguments, you must upload your application to appetize.io. After the upload, you will receive a public key that can be used with Storybook Native to view your application directly in storybook.

## Usage
To use this module, you must create a node script [such as this example one](examples/ios-material-ui/generate.js) that imports `generateStories` from this module. Pass in details about stories that you want this module to generate. Each call to `generateStories` generates a file that contains stories generated from the information you pass in. Run `yarn start-storybook` to view those stories in a local storybook instance, or run `yarn build-storybook` to build a static storybook that can be uploaded as a web page.

You must also have a `.storybook` folder with a `main.js` file inside of it, where you must configure the path to your stories, as well as any addons you want to use. The `@storybook/addon-docs` and `@storybook/addon-controls` addons must always be included. The `@storybook/native-addon` addon is required if you want to be able to rotate the emulator, or capture screenshots. [Here](examples/ios-simple/.storybook/main.js) is an example of a valid `main.js` file.

### Examples
Examples of how to use this module can be found [in this folder](examples/). The `app` folder inside each example contains the source code of the application the example is for.

### Parameters for `generateStories`
 - category: The group/category that the specified stories will fall under
 - filePath: The path to write the file that contains the generated stories
 - apiKey: Your application's public key that you received from appetize.io
 - platform: What platform your app is running on ("ios" or "android")
 - stories: A list of stories to generate, where each story is an object represented with the following keys:
   - name: The name of the story
   - appLaunchArgs: An object that gets passed to your application when it first launches. This is what is used to determine which component or page to load in your application, and it can also be used to handle other logic such as theming.
   - docs (optional): Documentation that you want to show up in the storybook docs panel

## Local development
 - Clone this repo
 - Run yarn to install dependencies
 - `yarn build && cd examples/ios-material-ui && yarn start`  
Anytime changes are made, yarn build and start must be re-run
