import { nativePreviewHead } from "@storybook/native";

const config = {
    stories: [
        { directory: "../src", files: "**/*.stories.@(mdx|tsx|ts|jsx|js)" }
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {}
    },
    addons: [
        "@storybook/addon-docs",
        "@storybook/addon-controls",
        "@storybook/native-addon/dist/register.js"
    ],
    docs: {
        autodocs: true
    },
    previewHead: nativePreviewHead
};

export default config;
