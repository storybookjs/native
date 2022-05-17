import React from "react";
import {
    ControllerManager,
    ACTION_EVENT_NAME,
    store,
    getAppetizeIframeId,
    getFullDeepLinkUrl
} from "@storybook/native-controllers";
import { useDevice, useOsVersion } from "@storybook/native-devices";
import { EmulatorActions } from "@storybook/native-types";
import { addons } from "@storybook/addons";
import { Provider } from "react-redux";

import type { DeepLinkRendererProps } from "../types";
import CommandsList from "../commands/CommandsList";

const manager = new ControllerManager();

export default (props: DeepLinkRendererProps): React.ReactElement => {
    const {
        apiKey,
        platform,
        extraParams,
        storyParams,
        deepLinkBaseUrl,
        appetizeBaseUrl,
        context
    } = props;

    if (!deepLinkBaseUrl) {
        throw new Error("No deep link base url was specified");
    }

    const device = useDevice(platform);
    const osVersion = useOsVersion(platform);
    React.useEffect(() => {
        const onAction = (action: EmulatorActions) => {
            const controller = manager.getController(context);
            controller.sendMessage({
                message: action
            });
        };

        addons.getChannel().on(ACTION_EVENT_NAME, onAction);
        return () => {
            addons.getChannel().off(ACTION_EVENT_NAME, onAction);
        };
    }, [context]);

    React.useEffect(() => {
        const controller = manager.getController(context);
        controller.updateConfig({
            apiKey,
            settings: {
                device,
                osVersion
            },
            platform,
            baseUrl: appetizeBaseUrl
        });
    }, [device, osVersion, apiKey, context, platform, appetizeBaseUrl]);

    const storyParamsWithExtras = { ...storyParams, ...extraParams };
    React.useEffect(() => {
        const controller = manager.getController(context);
        const newAppUrl = getFullDeepLinkUrl(
            deepLinkBaseUrl,
            storyParamsWithExtras
        );
        controller.openDeepLink(newAppUrl);
    }, [
        device,
        JSON.stringify(storyParamsWithExtras),
        deepLinkBaseUrl,
        apiKey,
        context,
        appetizeBaseUrl
    ]);

    React.useEffect(() => {
        const elementId = `native-iframe-css-${context || ""}`;
        const persistentIFrameCss = `
        #root[hidden="true"] ~ #${getAppetizeIframeId(context)} {
            display: none;
        }
    
        #${getAppetizeIframeId(context)} {
            display: none;
        }
        `;

        const existingStyle = document.head.querySelector(`#${elementId}`);
        if (!existingStyle) {
            const style = document.createElement("style");
            style.innerHTML = persistentIFrameCss;
            style.id = elementId;
            document.head.appendChild(style);
        }
    }, [context]);

    const renderedIFrameCss = `
    #${getAppetizeIframeId(context)} {
        display: block;
    }
    `;

    return (
        <Provider store={store}>
            <>
                <style>{renderedIFrameCss}</style>
                <CommandsList context={context} />
            </>
        </Provider>
    );
};
