import React from "react";
import {
    openDeepLink,
    ControllerManager,
    ACTION_EVENT_NAME,
    store
} from "@storybook/native-controllers";
import { useDevice } from "@storybook/native-devices";
import { EmulatorActions } from "@storybook/native-types";
import { addons } from "@storybook/addons";
import { Provider } from "react-redux";

import type { DeepLinkRendererProps } from "../types";
import CommandsList from "../commands/CommandsList";

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

const manager = new ControllerManager();

export default (props: DeepLinkRendererProps): React.ReactElement => {
    const {
        apiKey,
        platform,
        extraParams,
        storyParams,
        deepLinkBaseUrl,
        context
    } = props;

    if (!deepLinkBaseUrl) {
        throw new Error("No deep link base url was specified");
    }

    const device = useDevice(platform);
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
                device
            },
            platform
        });
    }, [device, apiKey, context, platform]);

    const storyParamsWithExtras = { ...storyParams, ...extraParams };
    React.useEffect(() => {
        const controller = manager.getController(context);
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

    return (
        <Provider store={store}>
            <>
                <style>{renderedIFrameCss}</style>
                <CommandsList context={context} />
            </>
        </Provider>
    );
};
