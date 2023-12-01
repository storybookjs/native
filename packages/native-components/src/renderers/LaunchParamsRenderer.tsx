import React from "react";
import {
    ACTION_EVENT_NAME,
    getAppetizeUrl
} from "@storybook/native-controllers";
import { useDevice, useLocation, useOsVersion } from "@storybook/native-devices";
import { EmulatorActions } from "@storybook/native-types";
import { addons } from "@storybook/addons";
import { RendererProps } from "../types";

export default (props: RendererProps): React.ReactElement => {
    const { apiKey, platform, extraParams, storyParams, appetizeBaseUrl } =
        props;
    const iframeRef = React.useRef<HTMLIFrameElement>(null);
    const device = useDevice(platform);
    const osVersion = useOsVersion(platform);
    const location = useLocation();

    React.useEffect(() => {
        const onAction = (action: EmulatorActions) => {
            iframeRef.current?.contentWindow?.postMessage(action, "*");
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
            location: location.latlng.join(",")
        },
        launchArgs: storyParamsWithExtras,
        platform,
        baseUrl: appetizeBaseUrl
    });
    return (
        <iframe
            title="appetize-embed"
            src={url}
            ref={iframeRef}
            style={{ border: "0", width: "100vw", height: "100vh" }}
            scrolling="no"
            id="appetize-iframe"
        />
    );
};
