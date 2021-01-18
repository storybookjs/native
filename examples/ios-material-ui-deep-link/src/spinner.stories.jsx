import React from "react";
import { Description } from "@storybook/addon-docs/blocks";
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
            knobs={props}
        />
    );
};

Example.parameters = {
    docs: {
        page: () => <Description markdown={undefined} />
    }
};
