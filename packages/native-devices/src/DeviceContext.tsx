import * as React from "react";
import { DeviceSelections } from "./types";
import { getDefaultDevice } from "./getDevices";

export const DeviceContext = React.createContext<DeviceSelections>({
    androidSelection: getDefaultDevice("android"),
    iosSelection: getDefaultDevice("ios")
});
