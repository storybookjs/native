import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";
import { PLATFORM, API_KEY, DEEP_LINK_BASE_URL } from "./constants";

export default {
    title: "Radio"
};

export const Example = (props) => {
    return (
        <EmulatorRenderer
            apiKey={API_KEY}
            platform={PLATFORM}
            deepLinkBaseUrl={DEEP_LINK_BASE_URL}
            storyParams={{ component: "radio" }}
            extraParams={props}
        />
    );
};

Example.args = {
    label1: "Radio 1",
    label2: "Radio 2",
    label3: "Radio 3",
    label4: "Radio 4",
    label5: "Radio 5"
};
