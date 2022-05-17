import { Platform } from "@storybook/native-types";
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
