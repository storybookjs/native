import React from "react";
import { EmulatorRenderer } from "@storybook/native-components";

const AndroidRenderer = ({ extraParams, component }) => {
    return (
        <EmulatorRenderer
            apiKey="zv034bdme9je7c9d43chzmc2yg"
            platform="android"
            storyParams={{ component }}
            deepLinkBaseUrl="sb-native://deep.link"
            extraParams={extraParams}
            context="android"
        />
    );
};

const IosRenderer = ({ extraParams, component }) => {
    return (
        <EmulatorRenderer
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
    title: "Comparison"
};

export const Button = (props) => {
    return (
        <div>
            <AndroidRenderer extraParams={props} component="button" />
            <IosRenderer extraParams={props} component="button" />
        </div>
    );
};

Button.args = {
    label: "Default button label"
};
