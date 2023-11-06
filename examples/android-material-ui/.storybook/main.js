const  config = {
    stories: [{ directory: '../stories', files: '**/*.stories.@(mdx|tsx|ts|jsx|js)' }],
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
