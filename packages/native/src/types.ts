interface StoryParams {
    name: String;
    appLaunchArgs: object;
    docs?: string;
}

interface Config {
    category: string;
    filePath: string;
    apiKey: string;
    platform: Platform;
    stories: StoryParams[];
}

type Platform = 'android' | 'ios';
