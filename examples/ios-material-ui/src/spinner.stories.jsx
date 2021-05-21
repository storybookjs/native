import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";

export default {
    title: "Spinner"
};

export const Example = (props) => {
    return (
        <EmulatorRenderer
            apiKey="yc0e33432655wbjnnnemyghhxm"
            platform="ios"
            storyParams={{ component: "spinner" }}
            deepLinkBaseUrl="sb-native://deep.link"
            extraParams={props}
        />
    );
};
