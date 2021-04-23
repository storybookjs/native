import React from "react";
import { openDeepLink, controllerManager } from "@storybook/native-controllers";
import { useDevice } from "@storybook/native-devices";

import type { DeepLinkRendererProps } from "./types";

// TODO: use constant for ID, include context
const renderedIFrameCss = `
    #appetize-iframe {
        display: block;
    }
`;

// TODO: use constant for ID, include context
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
        debounceDelay,
        context
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

    React.useEffect(() => {
        const controller = controllerManager.getController(context);
        controller.updateConfig({
            apiKey,
            settings: {
                device
            },
            platform
        });
    }, [device, apiKey, context, platform]);

    const storyParamsWithExtras = { ...storyParams, ...knobs };
    React.useEffect(() => {
        const controller = controllerManager.getController(context);
        openDeepLink(
            {
                deepLinkBaseUrl,
                storyParams: storyParamsWithExtras
            },
            controller
        );
    }, [
        device,
        JSON.stringify(storyParamsWithExtras),
        deepLinkBaseUrl,
        apiKey,
        context
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

    return <style>{renderedIFrameCss}</style>;
};
