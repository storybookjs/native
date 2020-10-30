interface StoryParams {
    name: String;
    appParams?: object;
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
