// this file is based upon similar code by https://github.com/hipstersmoothie

import {
    getDefaultDevice,
    getDevices,
    DeviceSelections
} from "@storybook/native-devices";

import { LOCAL_STORAGE_KEY } from "../constants";

export const DEFAULT_STATE: DeviceSelections = {
    androidSelection: getDefaultDevice("android"),
    iosSelection: getDefaultDevice("ios")
};

export const saveToLocalStorage = (data: DeviceSelections) => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const restoreFromLocalStorage = (
    state?: Partial<DeviceSelections>
): DeviceSelections => {
    const data = window.localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!data) {
        return {
            ...DEFAULT_STATE,
            ...state
        };
    }

    const androidDevices = getDevices("android");
    const iosDevices = getDevices("ios");
    const storedSelections = JSON.parse(data) as DeviceSelections;

    if (!androidDevices.includes(storedSelections.androidSelection)) {
        storedSelections.androidSelection = getDefaultDevice("android");
    }

    if (!iosDevices.includes(storedSelections.iosSelection)) {
        storedSelections.iosSelection = getDefaultDevice("ios");
    }

    return storedSelections;
};
