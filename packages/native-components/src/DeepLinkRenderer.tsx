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
    React.useEffect(() => {
        const appetizeUrl = getAppetizeUrl(
            {},
            {
                device
            },
            apiKey
        );

        const storyParamsWithKnobs = { ...storyParams, ...knobs };
        openDeepLink(appetizeUrl, deepLinkBaseUrl, storyParamsWithKnobs);
    }, [device, storyParams, knobs, deepLinkBaseUrl, apiKey]);

    return <div />;
};
