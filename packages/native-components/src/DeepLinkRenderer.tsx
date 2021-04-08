import React from "react";
import { getAppetizeUrl, openDeepLink } from "@storybook/appetize-utils";
import { useDevice } from "@storybook/native-devices";

import type { DeepLinkRendererProps } from "./types";

const renderedIframeCss = `
    #appetize-iframe {
        display: block;
    }
`;

const persistentIFrameCss = `
    #root[hidden="true"] ~ #appetize-iframe {
        display: none;
    }

    #appetize-iframe {
        display: none;
    }
`;

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

    React.useEffect(() => {
        const elementId = "native-iframe-css";
        const existingStyle = document.head.querySelector(`#${elementId}`);
        if (!existingStyle) {
            const style = document.createElement("style");
            style.innerHTML = persistentIFrameCss;
            style.id = elementId;
            document.head.appendChild(style);
        }
    }, []);

    return <style>{renderedIframeCss}</style>;
};
