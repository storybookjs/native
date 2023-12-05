import React from "react";
import {
    ACTION_EVENT_NAME,
    getAppetizeUrl
} from "@storybook/native-controllers";
import { useDevice, useLocation, useOsVersion } from "@storybook/native-devices";
import { EmulatorActions } from "@storybook/native-types";
import { addons } from "@storybook/addons";
import { ToastContainer, Slide } from "react-toastify";
import { RendererProps } from "../types";

import 'react-toastify/dist/ReactToastify.css';

export default (props: RendererProps): React.ReactElement => {
    const { apiKey, platform, extraParams, storyParams, appetizeBaseUrl, applicationId } =
        props;
    const iframeRef = React.useRef<HTMLIFrameElement>(null);
    const device = useDevice(platform);
    const osVersion = useOsVersion(platform);
    const location = useLocation();

    React.useEffect(() => {
        const onAction = (action: EmulatorActions) => {
            switch (action) {
                case EmulatorActions.stopApp:
                    iframeRef.current?.contentWindow?.postMessage({
                        type: 'adbShellCommand',
                        value: `am force-stop ${applicationId}`
                    }, "*");
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
    const url = getAppetizeUrl({
        apiKey,
        settings: {
            device,
            osVersion,
            location: location.latlng.join(","),
            debug: "true",
            proxy: "intercept"
        },
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
