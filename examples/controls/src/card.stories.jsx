import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";
import { PLATFORM, API_KEY, DEEP_LINK_BASE_URL } from "./constants";

export default {
    title: "Card"
};

export const Example = (props) => {
    return (
        <EmulatorRenderer
            apiKey={API_KEY}
            platform={PLATFORM}
            deepLinkBaseUrl={DEEP_LINK_BASE_URL}
            storyParams={{ component: "card" }}
            knobs={props}
        />
    );
};

Example.args = {
    title: "Card title",
    subtitle: "Card subtitle",
    body: "Card body",
    action1: "Cancel",
    action2: "Confirm"
};
