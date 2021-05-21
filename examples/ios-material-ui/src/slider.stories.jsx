import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";

export default {
    title: "Slider"
};

export const Example = (props) => {
    return (
        <EmulatorRenderer
            apiKey="yc0e33432655wbjnnnemyghhxm"
            platform="ios"
            storyParams={{ component: "slider" }}
            deepLinkBaseUrl="sb-native://deep.link"
            extraParams={props}
        />
    );
};
