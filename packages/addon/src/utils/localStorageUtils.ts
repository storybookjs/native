// this file is based upon similar code by https://github.com/hipstersmoothie

import {
    getDefaultDevice,
    getDevices,
    DeviceSelections,
    getDefaultOsVersion,
    getOsVersions,
    getDefaultLocation, getLocationsCodes,
} from "@storybook/native-devices";

import { LOCAL_STORAGE_KEY } from "../constants";

export const DEFAULT_STATE: DeviceSelections = {
    androidSelection: getDefaultDevice("android"),
    iosSelection: getDefaultDevice("ios"),
    iosVersion: getDefaultOsVersion("ios"),
    androidVersion: getDefaultOsVersion("android"),
    location: getDefaultLocation()
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
    const androidVersions = getOsVersions("android");
    const iosVersions = getOsVersions("ios");
    const locationCodes = getLocationsCodes();
    const storedSelections = JSON.parse(data) as DeviceSelections;

    if (!androidDevices.includes(storedSelections.androidSelection)) {
        storedSelections.androidSelection = getDefaultDevice("android");
    }

    if (!iosDevices.includes(storedSelections.iosSelection)) {
        storedSelections.iosSelection = getDefaultDevice("ios");
    }

    if (!androidVersions.includes(storedSelections.androidVersion)) {
        storedSelections.androidVersion = getDefaultOsVersion("android");
    }

    if (!iosVersions.includes(storedSelections.iosVersion)) {
        storedSelections.iosVersion = getDefaultOsVersion("ios");
    }

    if (!locationCodes.includes(storedSelections.location.code2)) {
        storedSelections.location = getDefaultLocation();
    }

    return storedSelections;
};