// this file is based upon similar code by https://github.com/hipstersmoothie

import {
    getDefaultDevice,
    getDevices,
    DeviceSelections,
    getDefaultOsVersion,
    getOsVersions,
    getDefaultLocation,
    getLocationsCodes,
    getFonts,
    getDefaultFont
} from "@storybook/native-devices";

import { LOCAL_STORAGE_KEY } from "../constants";

export const DEFAULT_STATE: DeviceSelections = {
    androidSelection: getDefaultDevice("android"),
    iosSelection: getDefaultDevice("ios"),

    iosVersion: getDefaultOsVersion("ios"),
    androidVersion: getDefaultOsVersion("android"),

    iosFont: getDefaultFont("ios"),
    androidFont: getDefaultFont("android"),

    location: getDefaultLocation(),
    networkLogs: false,
    logs: false
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

    const androidFonts = getFonts("android").map((font) => font.value);
    const iosFonts = getFonts("ios").map((font) => font.value);

    const locationCodes = getLocationsCodes();
    const storedSelections = JSON.parse(data) as DeviceSelections;
    storedSelections.networkLogs = storedSelections.networkLogs ?? false;
    storedSelections.logs = storedSelections.logs ?? false;

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

    if (!androidFonts.includes(storedSelections.androidFont?.value)) {
        storedSelections.androidFont = getDefaultFont("android");
    }

    if (!iosFonts.includes(storedSelections.iosFont?.value)) {
        storedSelections.iosFont = getDefaultFont("ios");
    }

    if (!locationCodes.includes(storedSelections.location.code2)) {
        storedSelections.location = getDefaultLocation();
    }

    return storedSelections;
};
