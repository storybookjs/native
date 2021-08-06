# @storybook/native
This module is a build tool that allows creation of stories to view components inside of Android and iOS native applications easily inside of storybook. The intended purpose is for native developers to be able to quickly get started with storybook without having to learn how to write extensive amounts of JavaScript, and without having to learn how to use storybook.

## Installation
`npm install @storybook/native`
or
`yarn add @storybook/native`

## Usage
To use this module, you must create a node script [such as this example one](../../examples/android-material-ui/generate.js) that imports `generateStories` from this module. Pass in details about stories that you want this module to generate. Each call to `generateStories` generates a file that contains stories generated from the information you pass in. Run `yarn start-storybook` to view those stories in a local storybook instance, or run `yarn build-storybook` to build a static storybook that can be uploaded as a web page.

### Parameters for `generateStories`
 - category: The group/category that the specified stories will fall under
 - filePath: The path to write the file that contains the generated stories
 - apiKey: Your application's public key that you received from appetize.io
 - platform: What platform your app is running on ("ios" or "android")
 - stories: A list of stories to generate, where each story is an object represented with the following keys:
   - name: The name of the story
   - appParams: Either an object that gets passed to your application when it first launches, or an object representing query string parameters for deep linking. This is what is used to determine which component or page to load in your application, and it can also be used to handle other logic such as theming.
   - docs (optional): Documentation that you want to show up in the storybook docs panel
 - controls: A list of key-value pairs. The key represents the control option, and the value is a data type describing the control configuration, used to generate the story. Currently, supported types include:
   - a list of strings for a `select` option 
   - a simple string for an editable text field (defaulting to `Default` if left empty) 
   - a boolean for a `switch`
   - or an object with 3 keys: min/max/increment for a `number`
 - deepLinkUrl: An optional base URL that is required only if you are using deep linking. Your application must be set to handle incoming URLs for this host (example: sb-native://deep.link)
