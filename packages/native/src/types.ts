export interface StoryParams {
    name: string;
    appParams?: Record<string, unknown>;
    docs?: string;
}

export interface Config {
    category: string;
    filePath: string;
    apiKey: string;
    platform: Platform;
    stories: StoryParams[];
    deepLinkUrl?: string;
}

export type Platform = 'android' | 'ios';
