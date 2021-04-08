import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";

const IosRenderer = ({ knobs, component }) => {
    return (
        <EmulatorRenderer
            apiKey="yc0e33432655wbjnnnemyghhxm"
            platform="ios"
            storyParams={{ component }}
            deepLinkBaseUrl="sb-native://deep.link"
            knobs={knobs}
        />
    );
};

export default {
    title: "iOS"
};

export const Button = (props) => {
    return <IosRenderer knobs={props} component="button" />;
};

export const FAB = (props) => {
    return <IosRenderer component="floatingbutton" knobs={props} />;
};
