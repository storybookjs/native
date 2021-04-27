import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";

const IosRenderer = ({ extraParams, component }) => {
    return (
        <EmulatorRenderer
            apiKey="yc0e33432655wbjnnnemyghhxm"
            platform="ios"
            storyParams={{ component }}
            deepLinkBaseUrl="sb-native://deep.link"
            extraParams={extraParams}
        />
    );
};

export default {
    title: "iOS"
};

export const Button = (props) => {
    return <IosRenderer extraParams={props} component="button" />;
};

export const FAB = (props) => {
    return <IosRenderer component="floatingbutton" extraParams={props} />;
};
