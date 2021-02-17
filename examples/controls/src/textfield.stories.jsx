import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";
import { PLATFORM, API_KEY, DEEP_LINK_BASE_URL } from "./constants";

export default {
    title: "Textfield"
};

export const Example = (props) => {
    return (
        <EmulatorRenderer
            apiKey={API_KEY}
            platform={PLATFORM}
            deepLinkBaseUrl={DEEP_LINK_BASE_URL}
            storyParams={{ component: "textfield" }}
            knobs={props}
        />
    );
};

Example.args = {
    helperText: "Enter some text!",
    hintText: "Example TextField",
    placeholderText: "Text..."
};
