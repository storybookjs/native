const { generateStories } = require("@storybook/native");
const { pascalCase } = require("change-case");
const axios = require("axios");

const components = [
    {
        name: "button",
        control: {
            label: "",
            variant: ["small", "medium", "large"],
            switch: false,
            progress: {
                min: 0,
                max: 1,
                increment: 0.2
            }
        },
        docs: "https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/Button.md"

    },
    {
        name: "floatingButton",
        docs:
            "https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/FloatingActionButton.md"
    },
    {
        name: "card",
        docs:
            "https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/Card.md"
    },
    {
        name: "chips",
        docs:
            "https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/Chip.md"
    },
    {
        name: "dialogs",
        docs:
            "https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/Dialog.md"
    },
    {
        name: "radio",
        docs:
            "https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/RadioButton.md"
    },
    {
        name: "switch",
        docs:
            "https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/Switch.md"
    },
    {
        name: "slider",
        docs:
            "https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/Slider.md"
    },
    {
        name: "snackbar",
        docs:
            "https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/Snackbar.md"
    },
    {
        name: "tabs",
        docs:
            "https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/Tabs.md"
    },
    {
        name: "textfield",
        docs:
            "https://raw.githubusercontent.com/material-components/material-components-android/master/docs/components/TextField.md"
    }
];

const promises = components.map(async (component) => {
    const docsRequest = await axios.get(component.docs);
    return generateStories({
        category: pascalCase(component.name),
        filePath: `./stories/${component.name}.stories.jsx`,
        apiKey: "zv034bdme9je7c9d43chzmc2yg",
        platform: "android",
        stories: [
            {
                name: "Example",
                appParams: {
                    component: component.name
                },
                docs: docsRequest.data
            }
        ],
        controls: component.control ? Object.entries(component.control) : undefined,
        deepLinkUrl: "sb-native://deep.link"
    });
});

Promise.all(promises).catch((err) => {
    console.error(err);
    process.exit(1);
});
