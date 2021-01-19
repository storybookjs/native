import { Platform } from "@storybook/native-types";

export interface RendererProps {
    /** Your public appetize.io API key */
    apiKey: string;
    /** The platform your app is for (android or ios) */
    platform: Platform;
    /** Base parameters to send to your application */
    storyParams: Record<string, any>;
    /**
     * Your application's base deep link URL (if you are using deep linking)
     * Example: "sb-native://deep.link"
     */
    deepLinkBaseUrl?: string;
    /**
     * Additional parameters to send to your application.
     *
     * In general, the difference between this prop and `storyParams` is that
     * the values passed to this prop should be ones that can change in the current story
     * based on knobs, controls, addons, etc.
     *
     * This prop is provided entirely for convenience
     */
    knobs?: Record<string, any>;
}
