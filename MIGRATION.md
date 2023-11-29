# Migration Guide

## Version `2.*` to Version `3.*`

* Update to latest version [![GitHub release (latest by date)](https://img.shields.io/github/v/release/storybookjs/native)](https://github.com/storybookjs/native/releases)

  ```shell
  yarn add @storybook/native
  ```
* Add the following `devDependencies` 
  ```shell
  yarn -D add @babel/preset-env @babel/preset-react @babel/preset-typescript @storybook/react-webpack5@7.5.3 storybook@7.5.3
  ```
* Add the following to your `resolutions` section in `package.json` due to [this issue](https://github.com/storybookjs/storybook/issues/22431)
     ```json
    {
      "devDependencies": {
        "@babel/preset-env": "^7.23.2",
        "@babel/preset-react": "^7.22.15",
        "@babel/preset-typescript": "^7.23.2",
        "@storybook/react-webpack5": "^7.5.3",
        "storybook": "^7.5.3"
      },
      "resolutions": {
        "jackspeak": "2.1.1"
      }
    }
    ```

* Update your `scripts`: `start-storybook` to `storybook dev` and `build-storybook` to `storybook build`
  ```json
  {
    "scripts": {
    "start": "yarn build:stories && storybook dev -p 53743",
    "build:storybook": "yarn build:stories && storybook build",
    "build:stories": "node ./generate.js"
    }
  }
  ```

* Update `.storybook/main.js` by exporting config and adding `framework` section
  ```javascript
  const config = {
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
      }
  };
  
  export default config;
  ```

* create `.babelrc.json` file at project's root dir if your project does not have one already
```json
{
  "sourceType": "unambiguous",
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": 100,
          "safari": 15,
          "firefox": 91
        }
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  "plugins": []
}
```

* If you created your own stories (not generated) make sure to use [new argType structure](https://storybook.js.org/docs/react/api/arg-types) (no more nested control object)

## Version 1 to Version 2

In version 2, there is no `debounceDelay` prop. If you are passing it to the emulator component, remove it.

The `knobs` prop has been renamed to `extraParams`.
