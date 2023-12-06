import { Platform, Location } from "@storybook/native-types";
import React from "react";

import { DeviceContext } from "./DeviceContext";

export const useDevice = (platform: Platform): string => {
    const state = React.useContext(DeviceContext);
    return platform === "android" ? state.androidSelection : state.iosSelection;
};

export const useOsVersion = (platform: Platform): string => {
    const state = React.useContext(DeviceContext);
    return platform === "android" ? state.androidVersion : state.iosVersion;
};

export const useLocation = (): Location => {
    const state = React.useContext(DeviceContext);
    return state.location;
};

export const useNetworkLogs = (): boolean => {
    const state = React.useContext(DeviceContext);
    return state.networkLogs ?? false;
};
