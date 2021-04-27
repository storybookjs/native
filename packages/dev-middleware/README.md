# @storybook/native-dev-middleware

This package allows you to control an emulator open on your local device by interacting with storybook. It only supports stories that use deep linking.

To use this package, you must have an emulator open on your local machine through `adb` (for Android apps), or through `xcrun` (for iOS apps)

## Installation
`npm install @storybook/native-dev-middleware`
or
`yarn add @storybook/native-dev-middleware`

## Usage

#### 1. Enabling middleware
Create a file called `middleware.js` inside of your `.storybook` folder. It should have contents like the below:
```js
const { middleware } = require("@storybook/native-dev-middleware");
module.exports = middleware();
```

Example file can be found [here](TODO)

The `middleware` function optionally takes in an object argument that lets you configure how to interact with emulators. Supported keys in that object are:
- androidCommandPath: Path to `adb`. Defaults to `adb`
- iosCommandPath: Path to `xcrun`. Defaults to `xcrun`
- timeout: How long before a command times out. Defaults to `10000` ms

#### 2. Setting environment variable
To actually tell storybook to interact with a local emulator, the `STORYBOOK_NATIVE_LOCAL_EMULATOR` environment variable must be set to a non-empty string.

Example:
```sh
export STORYBOOK_NATIVE_LOCAL_EMULATOR="true"
```

If you want to clear this value to go back to testing with your application with `appetize.io`, you can run:
```sh
export STORYBOOK_NATIVE_LOCAL_EMULATOR=
```

The [Storybook docs](https://storybook.js.org/docs/react/configure/environment-variables#using-env-files) discuss additional ways to declare this environment variable.

**IMPORTANT NOTE:** You should not have this environment variable set when you run the `build-storybook` command, as that will prevent your static storybook from working in production.

#### 3. Start your storybook
Now, you can start your storybook like how you normally would. As you interact with storybook, the emulator open on your local machine will be sent information such as what deep links to open.

## Troubleshooting

#### Android stories not updating
On Android, there may be instances where your emulator will not start an activity because an existing instance of that activity was already active. 

To work around this, you can add `android:launchMode="singleTask"` to your activity in your `AndroidManifest.xml` file, and create a function called `onNewIntent(intent: Intent?)` in your activity class to handle switching to a new deep link.

Example [manifest file](TODO)
Example [activity file](TODO)
