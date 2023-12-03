export type Platform = "android" | "ios";
export type EmulatorContext = string;

export interface EmulatorSettings {
    device: string;
    [key: string]: string;
}

export interface EmulatorConfig {
    settings: EmulatorSettings;
    platform: Platform;

    apiKey?: string;
    launchArgs?: Record<string, any>;

    /** The base URL to use for appetize */
    baseUrl?: string;
}

export enum EmulatorActions {
    clickHomeButton = "emitHomeButton",
    restartApp = "restartApp",
    stopApp = "stopApp",
    toggleFirebaseDebugView = "toggleFirebaseDebugView",
    shakeDevice = "shakeDevice",
    rotateLeft = "rotateLeft",
    rotateRight = "rotateRight",
    location = "location",
    saveScreenshot = "saveScreenshot"
}

export enum EmulatorRotation {
    vertical,
    horizontal,
    invertedVertical,
    invertedHorizontal
}

export const RotationsList = [
    EmulatorRotation.vertical,
    EmulatorRotation.horizontal,
    EmulatorRotation.invertedVertical,
    EmulatorRotation.invertedHorizontal
] as readonly EmulatorRotation[];
