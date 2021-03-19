import React from "react";
import { getAppetizeUrl, openDeepLink } from "@storybook/appetize-utils";
import { useDevice } from "@storybook/native-devices";
import debounce from "lodash.debounce";

import { DeepLinkRendererProps } from "./types";

export default (props: DeepLinkRendererProps): React.ReactElement => {
    const {
        apiKey,
        platform,
        knobs,
        storyParams,
        deepLinkBaseUrl,
        debounceDelay = 400
    } = props;
    const device = useDevice(platform);

    if (!deepLinkBaseUrl) {
        throw new Error("No deep link base url was specified");
    }

    const navigate = React.useCallback(
        debounce(
            (
                appetizeUrl: string,
                baseUrl: string,
                params: Record<string, any>
            ) => {
                openDeepLink(appetizeUrl, baseUrl, params);
            },
            debounceDelay
        ),
        [debounceDelay]
    );

    const storyParamsWithExtras = { ...storyParams, ...knobs };
    React.useEffect(() => {
        const appetizeUrl = getAppetizeUrl(
            {},
            {
                device
            },
            apiKey
        );

        navigate(appetizeUrl, deepLinkBaseUrl, storyParamsWithExtras);
    }, [
        device,
        JSON.stringify(storyParamsWithExtras),
        deepLinkBaseUrl,
        apiKey
    ]);

    return <div />;
};
