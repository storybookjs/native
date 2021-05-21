import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";

export default {
    title: "Button"
};

export const Example = (props) => {
    return (
        <EmulatorRenderer
            apiKey="yc0e33432655wbjnnnemyghhxm"
            platform="ios"
            storyParams={{ component: "button" }}
            deepLinkBaseUrl="sb-native://deep.link"
            extraParams={props}
        />
    );
};

Example.args = {
    label: "Button"
};
