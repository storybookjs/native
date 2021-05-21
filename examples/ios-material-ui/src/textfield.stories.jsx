import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";

export default {
    title: "TextField"
};

export const Example = (props) => {
    return (
        <EmulatorRenderer
            apiKey="yc0e33432655wbjnnnemyghhxm"
            platform="ios"
            storyParams={{ component: "textfield" }}
            deepLinkBaseUrl="sb-native://deep.link"
            extraParams={props}
        />
    );
};
