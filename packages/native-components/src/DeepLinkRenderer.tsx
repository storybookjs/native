import React from "react";
import { getAppetizeUrl, openDeepLink } from "@storybook/appetize-utils";
import { useDevice } from "@storybook/native-devices";
import { RendererProps } from "./types";

export default (props: RendererProps): React.ReactElement => {
    const { apiKey, platform, knobs, storyParams, deepLinkBaseUrl } = props;
    const device = useDevice(platform);

    if (!deepLinkBaseUrl) {
        throw new Error("No deep link base url was specified");
    }

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
    }, [device, JSON.stringify(storyParamsWithKnobs), deepLinkBaseUrl, apiKey]);

    return <div />;
};
