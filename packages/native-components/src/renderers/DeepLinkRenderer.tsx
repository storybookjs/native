import React from "react";
import {
    ControllerManager,
    ACTION_EVENT_NAME,
    store,
    getAppetizeIframeId,
    getFullDeepLinkUrl, useAppDispatch
} from "@storybook/native-controllers";
import { useDevice, useLocation, useOsVersion } from "@storybook/native-devices";
import { EmulatorActions, EmulatorEvents } from "@storybook/native-types";
import { addons } from "@storybook/addons";
import { Provider } from "react-redux";

import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import type { DeepLinkRendererProps } from "../types";
import CommandsList from "../commands/CommandsList";
import { addNetworkLog } from "@storybook/native-controllers/dist/state/networkLogsSlice";

const manager = new ControllerManager();

export default (props: DeepLinkRendererProps): React.ReactElement => {
    const {
        apiKey,
        platform,
        extraParams,
        storyParams,
        deepLinkBaseUrl,
        appetizeBaseUrl,
        context,
        applicationId
    } = props;

    if (!deepLinkBaseUrl) {
        throw new Error("No deep link base url was specified");
    }

    const device = useDevice(platform);
    const osVersion = useOsVersion(platform);
    const location = useLocation();
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        const onAction = (action: EmulatorActions, latLng?: number[]) => {
            const controller = manager.getController(context);
            controller.sendMessage({
                message: action,
                latLng,
                applicationId
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
                osVersion,
                location: location.latlng.join(","),
                debug: "true",
                proxy: "intercept"
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
        osVersion,
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
            <>
                <style>{renderedIFrameCss}</style>
                <CommandsList context={context} />
                <ToastContainer
                    newestOnTop
                    closeOnClick
                    draggable
                    pauseOnHover
                    limit={2}
                    hideProgressBar={false}
                    autoClose={3000}
                    pauseOnFocusLoss
                    transition={Slide}
                    theme="light"
                />
            </>
    );
};
