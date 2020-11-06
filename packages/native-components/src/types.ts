import { Platform } from "@storybook/native-types";

export interface RendererProps {
    apiKey: string;
    platform: Platform;
    storyParams: Record<string, any>;
    deepLinkBaseUrl?: string;
    knobs?: Record<string, any>;
}
