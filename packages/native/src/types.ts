interface StoryParams {
    name: String;
    appParams?: Record<string, unknown>;
    docs?: string;
}

interface Config {
    category: string;
    filePath: string;
    apiKey: string;
    platform: Platform;
    stories: StoryParams[];
    deepLinkUrl?: string;
}

type Platform = 'android' | 'ios';
