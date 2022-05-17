import * as React from "react";
import { DeviceSelections } from "./types";
import { getDefaultDevice, getDefaultOsVersion } from "./getDevices";

export const DeviceContext = React.createContext<DeviceSelections>({
    androidSelection: getDefaultDevice("android"),
    iosSelection: getDefaultDevice("ios"),
    iosVersion: getDefaultOsVersion("ios"),
    androidVersion: getDefaultOsVersion("android")
});
