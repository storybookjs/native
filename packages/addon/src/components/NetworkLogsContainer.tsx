import React, { useEffect } from "react";
import { API, useAddonState } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { EmulatorEvents } from "@storybook/native-types";
import { NetworkLogsList } from "@storybook/native-components";
import {
    addNetworkLog,
    resetNetworkLogs,
    useAppDispatch
} from "@storybook/native-controllers";
import { DeviceSelections } from "@storybook/native-devices";
import {
    DEFAULT_STATE,
    restoreFromLocalStorage
} from "../utils/localStorageUtils";
import { ADDON_ID } from "../constants";

export interface NetworkLogsContainerProps {
    api: API;
    active?: boolean;
}

export default ({ api, active }: NetworkLogsContainerProps) => {
    const dispatch = useAppDispatch();
    const savedState = restoreFromLocalStorage(DEFAULT_STATE);

    const [state, setState] = useAddonState<DeviceSelections>(
        ADDON_ID,
        savedState
    );

    const [isClientSetup, setClientSetup] = React.useState(true);

    useEffect(() => {
        const onMissingClient = () => {
            setClientSetup(false);
        };
        const onLog = (log: Record<string, any>) => {
            addNetworkLog(dispatch, log);
        };
        const onRestLogs = () => {
            resetNetworkLogs(dispatch);
        };
        api.on(EmulatorEvents.onMissingClient, onMissingClient);
        api.on(EmulatorEvents.onNetworkLog, onLog);
        api.on(EmulatorEvents.onRestNetworkLogs, onRestLogs);

        return () => {
            api.off(EmulatorEvents.onMissingClient, onMissingClient);
            api.off(EmulatorEvents.onNetworkLog, onLog);
            api.off(EmulatorEvents.onRestNetworkLogs, onRestLogs);
        };
    }, []);

    const enableNetworkLogs = () => {
        setState({ ...state, networkLogs: true });
    };
    const disableNetworkLogs: () => void = () => {
        setState({ ...state, networkLogs: false });
    };

    return (
        <AddonPanel key="network-logs-panel" active={Boolean(active)}>
            {!isClientSetup && (
                <div style={{ margin: "20px" }}>
                    <h1>Preview Header Missing!</h1>
                    <p>
                        To use Network Logs in your storybook, you need to setup
                        previewHeader
                    </p>
                    <p>
                        Follow the steps
                        <a
                            href="https://github.com/storybookjs/native/tree/master/packages/addon#network-logs"
                            rel="noreferrer"
                            target="_blank"
                        >
                            {" "}
                            here
                            {" "}
                        </a>
                    </p>
                </div>
            )}
            {isClientSetup && !state.networkLogs && (
                <div
                    style={{
                        margin: "4px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <button
                        type="button"
                        onClick={enableNetworkLogs}
                        style={{
                            marginTop: "40%",
                            backgroundColor: "#65e5a6",
                            fill: "#090909",
                            color: "#090909",
                            borderRadius: "1rem",
                            borderWidth: "0px",
                            padding: "5px",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                            fontSize: "16px"
                        }}
                    >
                        Enable Network Logs
                    </button>
                </div>
            )}
            {isClientSetup && state.networkLogs && (
                <NetworkLogsList onDisableNetwork={disableNetworkLogs} />
            )}
        </AddonPanel>
    );
};
