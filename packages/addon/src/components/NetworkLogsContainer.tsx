import React, {useEffect, useState} from "react";
import {API} from "@storybook/api";
import {AddonPanel} from "@storybook/components";
import {EmulatorEvents} from "@storybook/native-types";
import NetworkLogsList from "@storybook/native-components/dist/log/NetworkLogsList";
import { useAppDispatch } from "@storybook/native-controllers";
import {addNetworkLog} from "@storybook/native-controllers/dist/state/networkLogsSlice";

export interface NetworkLogsContainerProps {
    api: API;
    active?: boolean;
}

export default ({api, active}: NetworkLogsContainerProps) => {
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        const onLog = (log: Record<string, any>) => {
            addNetworkLog(dispatch, log)
        }
        api.on(EmulatorEvents.onNetworkLog, onLog);

        return () => {
            api.off(EmulatorEvents.onNetworkLog, onLog);
        };
    }, []);

    return (
        <AddonPanel key="network-logs-panel" active={Boolean(active)}>
            <NetworkLogsList/>
        </AddonPanel>
    );
};
