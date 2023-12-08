import React from "react";
import {
    ACTION_EVENT_NAME,
    getAppetizeUrl
} from "@storybook/native-controllers";
import {
    useDevice,
    useFont,
    useLocation,
    useLogs,
    useNetworkLogs,
    useOsVersion
} from "@storybook/native-devices";
import { EmulatorActions, EmulatorSettings } from "@storybook/native-types";
import { addons } from "@storybook/addons";
import { ToastContainer, Slide } from "react-toastify";
import { RendererProps } from "../types";

import "react-toastify/dist/ReactToastify.css";

export default (props: RendererProps): React.ReactElement => {
    const {
        apiKey,
        platform,
        extraParams,
        storyParams,
        appetizeBaseUrl,
        applicationId
    } = props;
    const iframeRef = React.useRef<HTMLIFrameElement>(null);
    const device = useDevice(platform);
    const osVersion = useOsVersion(platform);
    const font = useFont(platform);
    const location = useLocation();
    const networkLogs = useNetworkLogs();
    const logs = useLogs();

    React.useEffect(() => {
        const onAction = (action: EmulatorActions) => {
            switch (action) {
                case EmulatorActions.stopApp:
                    iframeRef.current?.contentWindow?.postMessage(
                        {
                            type: "adbShellCommand",
                            value: `am force-stop ${applicationId}`
                        },
                        "*"
                    );
                    break;
                default:
                    iframeRef.current?.contentWindow?.postMessage(action, "*");
                    break;
            }
        };

        addons.getChannel().on(ACTION_EVENT_NAME, onAction);
        return () => {
            addons.getChannel().off(ACTION_EVENT_NAME, onAction);
        };
    }, []);

    const storyParamsWithExtras = { ...storyParams, ...extraParams };
    const settings: EmulatorSettings = {
        device,
        osVersion,
        location: location.latlng.join(",")
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

    const url = getAppetizeUrl({
        apiKey,
        settings,
        launchArgs: storyParamsWithExtras,
        platform,
        baseUrl: appetizeBaseUrl
    });
    return (
        <div>
            <iframe
                title="appetize-embed"
                src={url}
                ref={iframeRef}
                style={{ border: "0", width: "100vw", height: "100vh" }}
                scrolling="no"
                id="appetize-iframe"
            />
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
        </div>
    );
};
