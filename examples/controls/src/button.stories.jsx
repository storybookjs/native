import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";
import { PLATFORM, API_KEY, DEEP_LINK_BASE_URL } from "./constants";

export default {
    title: "Button"
};

export const Example = (props) => {
    return (
        <EmulatorRenderer
            apiKey={API_KEY}
            platform={PLATFORM}
            deepLinkBaseUrl={DEEP_LINK_BASE_URL}
            storyParams={{ component: "button" }}
            knobs={props}
        />
    );
};

Example.args = {
    label: "Default button label"
};
