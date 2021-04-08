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
