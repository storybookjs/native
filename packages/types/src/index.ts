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
    overviewApps = "overviewApps",
    toggleFirebaseDebugView = "toggleFirebaseDebugView",
    shakeDevice = "shakeDevice",
    rotateLeft = "rotateLeft",
    rotateRight = "rotateRight",
    location = "location",
    saveScreenshot = "saveScreenshot",
    showLayoutBounds = "showLayoutBounds",
    profileGpuRendering = "profileGpuRendering",
    showOverdraw = "showOverdraw",
    dontKeepActivities = "dontKeepActivities"
}

export enum EmulatorEvents {
    onMissingClient = "onMissingClient",
    onClient = "onClient",
    onSession = "onSession",
    onLog = "log",
    onRestLogs = "reset-logs",
    onNetworkLog = "network-log",
    onRestNetworkLogs = "reset-network-logs"
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

export interface Location {
    name: string;
    city: string;
    code2: string;
    code3: string;
    latlng: number[];
    flag: string;
}

export interface GlobalLocation {
    defaultCode?: string;
    locations?: Location[];
    filterCodes?: string[];
    googleMapsApiKey?: string;
}

export interface Font {
    name: string;
    value: string;
}

/**
 * For full api reference check
 * https://docs.appetize.io/javascript-sdk/api-reference
 */
declare global {
    interface Window {
        appetize: {
            getClient: (client: string) => Promise<Client>;
        };
    }

    interface Client {
        on: (
            event: string,
            data: string | Session | Record<string, any> | any
        ) => void;
    }

    interface Session {
        app: App;
        path: string;
        token: string;
        on: (event: string, data: Log | Record<string, any> | any) => void;
        swipe: (target: Target) => void;
        keypress: (character: string, options?: Options) => void;
        adbShellCommand: (command: string) => Promise<any>;
    }

    interface App {
        bundle: string;
        name: string;
        platform: string;
    }

    interface Options {
        shift?: boolean;
    }

    interface Target {
        gesture: string | any;
        coordinates?: Coordinates;
        position?: Position;
        duration?: number;
    }

    interface Coordinates {
        x: number;
        y: number;
    }

    interface Position {
        x: string;
        y: string;
    }

    interface Log {
        message: string;
    }
}
