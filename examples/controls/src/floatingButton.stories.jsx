import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";
import rgbHex from "rgb-hex";

import { PLATFORM, API_KEY, DEEP_LINK_BASE_URL } from "./constants";

export default {
    title: "FloatingButton",
    argTypes: {
        rippleColor: {
            control: "color"
        }
    }
};

export const Example = (props) => {
    const rippleColor = rgbHex(props.rippleColor);

    return (
        <EmulatorRenderer
            apiKey={API_KEY}
            platform={PLATFORM}
            deepLinkBaseUrl={DEEP_LINK_BASE_URL}
            storyParams={{ component: "floatingButton" }}
            extraParams={{
                rippleColor
            }}
        />
    );
};

Example.args = {
    rippleColor: "rgb(0,255,255)"
};
