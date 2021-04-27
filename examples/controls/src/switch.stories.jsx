import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";
import { PLATFORM, API_KEY, DEEP_LINK_BASE_URL } from "./constants";

export default {
    title: "Switch"
};

export const Example = (props) => {
    return (
        <EmulatorRenderer
            apiKey={API_KEY}
            platform={PLATFORM}
            deepLinkBaseUrl={DEEP_LINK_BASE_URL}
            storyParams={{ component: "switch" }}
            extraParams={props}
        />
    );
};

Example.args = {
    label1: "Switch 1",
    label2: "Switch 2",
    label3: "Switch 3",
    label4: "Switch 4",
    label5: "Switch 5",
    enableLastSwitch: false
};
