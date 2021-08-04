import { Platform } from "@storybook/native-types";

export interface StoryParams {
    name: string;
    appParams: Record<string, unknown>;
    docs?: string;
}

export interface Config {
    category: string;
    filePath: string;
    apiKey: string;
    platform: Platform;
    stories: StoryParams[];
    controls: [string, unknown][];
    deepLinkUrl?: string;
}
