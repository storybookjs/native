import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";
import { PLATFORM, API_KEY, DEEP_LINK_BASE_URL } from "./constants";

export default {
    title: "Chips"
};

export const Example = (props) => {
    return (
        <EmulatorRenderer
            apiKey={API_KEY}
            platform={PLATFORM}
            deepLinkBaseUrl={DEEP_LINK_BASE_URL}
            storyParams={{ component: "chips" }}
            extraParams={props}
        />
    );
};

Example.args = {
    chip1: "Chip 1",
    chip2: "Chip 2",
    chip3: "Chip 3",
    chip4: "Chip 4"
};
