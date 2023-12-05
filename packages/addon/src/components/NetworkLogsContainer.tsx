import React, {useEffect} from "react";
import {API, useAddonState} from "@storybook/api";
import {AddonPanel} from "@storybook/components";
import {EmulatorEvents} from "@storybook/native-types";
import {NetworkLogsList} from "@storybook/native-components";
import { useAppDispatch } from "@storybook/native-controllers";
import {addNetworkLog, resetNetworkLogs} from "@storybook/native-controllers/dist/state/networkLogsSlice";
import {DeviceSelections} from "@storybook/native-devices";
import {DEFAULT_STATE, restoreFromLocalStorage} from "../utils/localStorageUtils";
import {ADDON_ID} from "../constants";

export interface NetworkLogsContainerProps {
    api: API;
    active?: boolean;
}

export default ({api, active}: NetworkLogsContainerProps) => {
    const dispatch = useAppDispatch();
    const savedState = restoreFromLocalStorage(DEFAULT_STATE);

    const [state, setState] = useAddonState<DeviceSelections>(
        ADDON_ID,
        savedState
    );

    useEffect(() => {
        const onLog = (log: Record<string, any>) => {
            addNetworkLog(dispatch, log);
        };
        const onRestLogs = () => {
            resetNetworkLogs(dispatch);
        };
        api.on(EmulatorEvents.onNetworkLog, onLog);
        api.on(EmulatorEvents.onRestNetworkLogs, onRestLogs);

        return () => {
            api.off(EmulatorEvents.onNetworkLog, onLog);
            api.off(EmulatorEvents.onRestNetworkLogs, onRestLogs);
        };
    }, []);

    const enableNetworkLogs = () => {
        setState({...state, networkLogs: true});
    };
    const disableNetworkLogs: () => void = () => {
        setState({...state, networkLogs: false});
    };


    return (
        <AddonPanel key="network-logs-panel" active={Boolean(active)}>
            {!state.networkLogs &&
                <div style={{
                    margin: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                >
                <button
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
            </div>}
            {state.networkLogs && <NetworkLogsList onDisableNetwork={disableNetworkLogs} />}
        </AddonPanel>
    );
};
