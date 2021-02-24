# Storybook Native
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Storybook Native is an extension of the normal web storybook that uses [appetize.io](https://appetize.io/) to render your mobile application in an emulator that can be interacted with from your browser. It allows you to use many of the features that are available in the web storybook, such as addons, controls, knobs, etc.

### Installation
If you want to use this module as a build tool that generates stories from metadata, [follow the instructions here](packages/native/README.md)

If you just want to use this module to render an emulator as a 
lightweight React component, [follow the instructions here](packages/native-components/README.md)

## Your mobile application
Your android or iOS app needs to be modified to handle switching between stories. There are 2 ways to handle this:

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
 - [Android](examples/android-material-ui/app/app/src/main/java/com/intuit/august2020/storybookdemoapp/MainActivity.kt#L42)
 - [iOS](examples/ios-material-ui/app/iOSStoryBookDemo/iOSStoryBookDemo/AppDelegate.swift#L83)

You can read more about how to setup deep linking for Android [here](https://developer.android.com/training/app-links/deep-linking).

For iOS, [this article](https://medium.com/wolox/ios-deep-linking-url-scheme-vs-universal-links-50abd3802f97) explains how to set up deep linking. Note that for the examples in this repo, we use URL schemes instead of Universal Links since they are simpler to set up.

Deep linking should also work on Flutter, but there are no examples for this yet.

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
 - [Android](examples/android-material-ui/app/app/src/main/java/com/intuit/august2020/storybookdemoapp/MainActivity.kt#L38)
 - [Flutter](examples/flutter/app/lib/main.dart#L73)
 - [iOS](examples/ios-material-ui/app/iOSStoryBookDemo/iOSStoryBookDemo/AppDelegate.swift#L66)

More details about these parameters can be found in the [bottom of the appetize.io docs](https://docs.appetize.io/core-features/playback-options)

## Usage
After you have modified your application to support launch parameters or query parameters, you must upload your application to appetize.io. After the upload, you will receive a public key that can be used with Storybook Native to view your application directly in storybook.

Storybook Native can then be used either as a [build tool](packages/native/README.md), or as a [React component library](packages/native-components/README.md) that manages switching between stories.

You must create a `.storybook` folder with a `main.js` file inside of it, where you must configure the path to your stories, as well as any addons you want to use. The `@storybook/addon-docs` and `@storybook/addon-controls` addons must always be included. The `@storybook/native-addon` addon is required if you want to be able to rotate the emulator, capture screenshots, or switch between devices. [Here](examples/android-material-ui/.storybook/main.js) is an example of a valid `main.js` file.

To enable switching between devices, you must also create a `preview.js` file in your `.storybook` folder, with the [contents found here](examples/android-material-ui/.storybook/preview.js)

If you are using deep linking, your `.storybook` folder should also have a `preview-body.html` that declares the following contents:
```html
<style>
  #root[hidden="true"] ~ #appetize-iframe {
    display: none;
  }
</style>
```

### Examples
Examples of how to use this module as both a build tool and as a component library can be found [in this folder](examples/). The `app` folder inside each example contains the source code of the application the example is for.

- [Android storybook with controls](https://storybookjs.github.io/native/@storybook/native-controls-example/index.html?path=/story/button--example)
- [Android storybook with deep linking](https://storybookjs.github.io/native/@storybook/native-android-material-deep-link-example/index.html)
- [iOS storybook with deep linking](https://storybookjs.github.io/native/@storybook/native-ios-example-deep-link/index.html?path=/story/button--example)
- [Flutter storybook with launch parameters](https://storybookjs.github.io/native/@storybook/native-flutter-example/index.html?path=/story/android--button)

More example static storybooks can be found [here](https://storybookjs.github.io/native/)

## Local development
 - Clone this repo
 - Run yarn to install dependencies
 - `yarn build && cd examples/android-material-ui && yarn start`  
Anytime changes are made, yarn build and start must be re-run

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://shilman.net/"><img src="https://avatars2.githubusercontent.com/u/488689?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Shilman</b></sub></a><br /><a href="https://github.com/storybookjs/native/commits?author=shilman" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/amalik2"><img src="https://avatars1.githubusercontent.com/u/25858348?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adil Malik</b></sub></a><br /><a href="https://github.com/storybookjs/native/commits?author=amalik2" title="Code">💻</a> <a href="https://github.com/storybookjs/native/commits?author=amalik2" title="Documentation">📖</a> <a href="#example-amalik2" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/vasikarla"><img src="https://avatars0.githubusercontent.com/u/1945958?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Raj Vasikarla</b></sub></a><br /><a href="https://github.com/storybookjs/native/commits?author=vasikarla" title="Documentation">📖</a> <a href="https://github.com/storybookjs/native/commits?author=vasikarla" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!