interface StoryParams {
    name: string;
    appLaunchArgs: Record<string, unknown>;
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
