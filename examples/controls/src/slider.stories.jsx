import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";
import { PLATFORM, API_KEY, DEEP_LINK_BASE_URL } from "./constants";

export default {
    title: "Slider",
    argTypes: {
        rangeMax: {
            control: { type: "range", min: 1, max: 100, step: 1 }
        }
    }
};

export const Example = (props) => {
    return (
        <EmulatorRenderer
            apiKey={API_KEY}
            platform={PLATFORM}
            deepLinkBaseUrl={DEEP_LINK_BASE_URL}
            storyParams={{ component: "slider" }}
            knobs={{
                rangeMax: props.rangeMax
            }}
        />
    );
};

Example.args = {
    rangeMax: 100
};
