## Configuring Storybook

Storybook Native can be used either as a [build tool](packages/native/README.md), or as a [React component library](packages/native-components/README.md) that manages switching between stories.

You must create a `.storybook` folder with a `main.js` file inside of it, where you must configure the path to your stories, as well as any addons you want to use. The `@storybook/addon-docs` and `@storybook/addon-controls` addons must always be included. The `@storybook/native-addon` addon is required if you want to be able to rotate the emulator, capture screenshots, or switch between devices. [Here](examples/android-material-ui/.storybook/main.js) is an example of a valid `main.js` file.

To enable switching between devices, you must also create a `preview.js` file in your `.storybook` folder, with the [contents found here](examples/android-material-ui/.storybook/preview.js)
