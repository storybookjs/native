import React from "react";
import { getAppetizeUrl, openDeepLink } from "@storybook/appetize-utils";
import { useDevice } from "@storybook/native-devices";
import { RendererProps } from "./types";

export default (props: RendererProps): React.ReactElement => {
    const { apiKey, platform, knobs, storyParams, deepLinkBaseUrl } = props;
    if (!deepLinkBaseUrl) {
        throw new Error("No deep link base url was specified");
    }

    const device = useDevice(platform);
    const storyParamsWithKnobs = { ...storyParams, ...knobs };

    React.useEffect(() => {
        const appetizeUrl = getAppetizeUrl(
            {},
            {
                device
            },
            apiKey
        );

        openDeepLink(appetizeUrl, deepLinkBaseUrl, storyParamsWithKnobs);
    }, [device, storyParamsWithKnobs, deepLinkBaseUrl]);

    return <div />;
};
