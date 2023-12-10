import { Platform, Location, Font } from "@storybook/native-types";
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

export const useFont = (platform: Platform): Font => {
    const state = React.useContext(DeviceContext);
    return platform === "android" ? state.androidFont : state.iosFont;
};

export const useLocation = (): Location => {
    const state = React.useContext(DeviceContext);
    return state.location;
};

export const useNetworkLogs = (): boolean => {
    const state = React.useContext(DeviceContext);
    return state.networkLogs ?? false;
};

export const useLogs = (): boolean => {
    const state = React.useContext(DeviceContext);
    return state.logs ?? false;
};

export const useTheme = (): boolean => {
    const state = React.useContext(DeviceContext);
    return state.isDarkTheme ?? false;
};
