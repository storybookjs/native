import React, { useEffect } from "react";
import { API, useAddonState } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { EmulatorEvents } from "@storybook/native-types";
import {
    addLog,
    resetLogs,
    useAppDispatch
} from "@storybook/native-controllers";
import { DeviceSelections } from "@storybook/native-devices";
import { LogsList } from "@storybook/native-components";
import {
    DEFAULT_STATE,
    restoreFromLocalStorage
} from "../utils/localStorageUtils";
import { ADDON_ID } from "../constants";

export interface LogsContainerProps {
    api: API;
    active?: boolean;
}

export default ({ api, active }: LogsContainerProps) => {
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
        const onLog = (log: Log) => {
            addLog(dispatch, log);
        };
        const onRestLogs = () => {
            resetLogs(dispatch);
        };
        api.on(EmulatorEvents.onMissingClient, onMissingClient);
        api.on(EmulatorEvents.onLog, onLog);
        api.on(EmulatorEvents.onRestLogs, onRestLogs);

        return () => {
            api.off(EmulatorEvents.onMissingClient, onMissingClient);
            api.off(EmulatorEvents.onLog, onLog);
            api.off(EmulatorEvents.onRestLogs, onRestLogs);
        };
    }, []);

    const enableLogs = () => {
        setState({ ...state, logs: true });
    };
    const disableLogs: () => void = () => {
        setState({ ...state, logs: false });
    };

    return (
        <AddonPanel key="logs-panel" active={Boolean(active)}>
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
                            href="https://github.com/storybookjs/native/tree/master/packages/addon#logs"
                            rel="noreferrer"
                            target="_blank"
                        >
                            {" "}
                            here{" "}
                        </a>
                    </p>
                </div>
            )}
            {isClientSetup && !state.logs && (
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
                        onClick={enableLogs}
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
                        Enable Logs
                    </button>
                </div>
            )}
            {isClientSetup && state.logs && (
                <LogsList onDisableLogs={disableLogs} />
            )}
        </AddonPanel>
    );
};
