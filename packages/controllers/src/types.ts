import type { Platform } from "@storybook/native-types";

export interface MessageWithParam {
    type: string;
    value: string;
}

export type Message = string | MessageWithParam;

export interface OpenDeepLinkOptions {
    deepLinkBaseUrl: string;
    storyParams: Record<string, any>;
}

export interface SendMessageOptions {
    message: Message;
    requireConnection?: boolean;
}

export interface EmulatorSettings {
    device: string;
    [key: string]: string;
}

export interface EmulatorConfig {
    settings: EmulatorSettings;
    platform: Platform;

    apiKey?: string;
    launchArgs?: Record<string, any>;
}
