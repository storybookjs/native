# @storybook/native-addon
This module contains an addon that can be used to interact with the appetize.io emulator.  
Currently, it lets you rotate the emulator left or right, take screenshots, and change the device that is being emulated.

## Installation
`npm install @storybook/native-addon`
or
`yarn add @storybook/native-addon`

## Usage
Add `"@storybook/native-addon/dist/register.js"` to the addons section of your `main.js` file.

Add the following to your `preview.js` file:
```jsx
import { DeviceDecorator } from "@storybook/native-addon";

export const decorators = [DeviceDecorator];
```

An example main.js can be found [here](../../examples/controls/.storybook/main.js).  
An example preview.js can be found [here](../../examples/controls/.storybook/preview.js).  

## Network Logs 

If you want to use the network logs panel you need to a config the `previewHead` of your storybook , 
it will make sure that the [Appetize SDK](https://docs.appetize.io/javascript-sdk/getting-started) is fetched and setup

Update your `main.js` file with the following code:

```js
import { nativePreviewHead } from "@storybook/native";

const  config = {
    stories: ["../stories/*.stories.jsx"],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    addons: [
        "@storybook/addon-docs",
        "@storybook/addon-controls",
        "@storybook/native-addon/dist/register.js"
    ],
    docs: {
        autodocs: true
    },
    previewHead: nativePreviewHead,

};

export default config;
```

## Google Map API Key

If you want to use the map addon panel you need to a global Google map api key, You can get one [here](https://developers.google.com/maps/documentation/javascript)

After you get the api key you can update the `preview.js` file with the following code:

```js
const preview = {
    globalTypes: {
        location: {
            description: 'Device Location',
            defaultValue: getGlobalLocationJson(
                {
                    googleMapsApiKey: "<you-api-key>"
                }
            )
        },
    },
    decorators: [DeviceDecorator]
};

export default preview;
```