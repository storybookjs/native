import React from "react";
import {
    ControllerManager,
    ACTION_EVENT_NAME,
    getAppetizeIframeId,
    getFullDeepLinkUrl
} from "@storybook/native-controllers";
import {
    useDevice,
    useFont,
    useLocation,
    useLogs,
    useNetworkLogs,
    useOsVersion,
    useTheme
} from "@storybook/native-devices";
import { EmulatorActions, EmulatorSettings } from "@storybook/native-types";
import { addons } from "@storybook/addons";

import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        context,
        applicationId,
        session
    } = props;

    if (!deepLinkBaseUrl) {
        throw new Error("No deep link base url was specified");
    }

    const device = useDevice(platform);
    const osVersion = useOsVersion(platform);
    const font = useFont(platform);
    const location = useLocation();
    const networkLogs = useNetworkLogs();
    const logs = useLogs();
    const isDarkMode = useTheme();

    React.useEffect(() => {
        const onAction = (action: EmulatorActions, latLng?: number[]) => {
            const controller = manager.getController(context);
            controller.sendMessage({
                message: action,
                latLng,
                applicationId,
                session
            });
        };

        addons.getChannel().on(ACTION_EVENT_NAME, onAction);
        return () => {
            addons.getChannel().off(ACTION_EVENT_NAME, onAction);
        };
    }, [context, session]);

    React.useEffect(() => {
        const controller = manager.getController(context);
        const settings: EmulatorSettings = {
            device,
            osVersion,
            location: location.latlng.join(","),
            appearance: isDarkMode ? "dark" : "light"
        };

        if (platform === "android") {
            settings.adbShellCommand = `settings put system font_scale ${font.value}`;
        } else {
            settings.launchArgs = `["-UIPreferredContentSizeCategoryName","${font.value}"]`;
        }

        if (logs) {
            settings.debug = "true";
        }

        if (networkLogs) {
            settings.proxy = "intercept";
        }

        controller.updateConfig({
            apiKey,
            settings,
            platform,
            baseUrl: appetizeBaseUrl
        });
    }, [
        device,
        osVersion,
        font,
        apiKey,
        context,
        platform,
        appetizeBaseUrl,
        networkLogs,
        logs
    ]);

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
        appetizeBaseUrl,
        isDarkMode
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
