import React from "react";
import { DeepLinkRenderer } from "@storybook/native-components";

const IosRenderer = ({ extraParams, component }) => {
    return (
        <DeepLinkRenderer
            apiKey="yc0e33432655wbjnnnemyghhxm"
            platform="ios"
            storyParams={{ component }}
            deepLinkBaseUrl="sb-native://deep.link"
            extraParams={extraParams}
            context="ios"
        />
    );
};

export default {
    title: "iOS"
};

export const Button = (props) => {
    return <IosRenderer extraParams={props} component="button" />;
};

Button.args = {
    label: "Default button label"
};

export const FAB = (props) => {
    return <IosRenderer component="floatingbutton" extraParams={props} />;
};
