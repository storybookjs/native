import React from "react";
import { getAppetizeUrl, openDeepLink } from "@storybook/appetize-utils";
import { useDevice } from "@storybook/native-devices";

import { DeepLinkRendererProps } from "./types";

export default (props: DeepLinkRendererProps): React.ReactElement => {
    const {
        apiKey,
        platform,
        knobs,
        storyParams,
        deepLinkBaseUrl,
        debounceDelay
    } = props;
    const device = useDevice(platform);

    if (!deepLinkBaseUrl) {
        throw new Error("No deep link base url was specified");
    }

    if (debounceDelay) {
        console.warn(
            `The debounceDelay prop is deprecated and will be removed in the next major version of Storybook Native`
        );
    }

    const storyParamsWithExtras = { ...storyParams, ...knobs };
    React.useEffect(() => {
        const appetizeUrl = getAppetizeUrl(
            {},
            {
                device
            },
            apiKey
        );

        openDeepLink(appetizeUrl, deepLinkBaseUrl, storyParamsWithExtras);
    }, [
        device,
        JSON.stringify(storyParamsWithExtras),
        deepLinkBaseUrl,
        apiKey
    ]);

    return <div />;
};
