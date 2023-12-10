import * as React from "react";
import { DeviceSelections } from "./types";
import {
    getDefaultDevice,
    getDefaultFont,
    getDefaultLocation,
    getDefaultOsVersion
} from "./getDevices";

export const DeviceContext = React.createContext<DeviceSelections>({
    androidSelection: getDefaultDevice("android"),
    iosSelection: getDefaultDevice("ios"),

    iosVersion: getDefaultOsVersion("ios"),
    androidVersion: getDefaultOsVersion("android"),

    androidFont: getDefaultFont("android"),
    iosFont: getDefaultFont("ios"),

    location: getDefaultLocation(),
    networkLogs: false,
    logs: false,
    isDarkTheme: false
});
