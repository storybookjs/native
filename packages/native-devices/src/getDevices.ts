import { Platform } from "@storybook/native-types";

export const getDefaultDevice = (platform: Platform): string => {
    if (platform === "android") {
        return "nexus5";
    }
    if (platform === "ios") {
        return "iphone9";
    }

    throw new Error(`No device for platform: ${platform}`);
};

export const getDevices = (platform: Platform): string[] => {
    if (platform === "android") {
        return [
            "nexus5",
            "nexus7",
            "nexus9",
            "pixel4",
            "pixel4xl",
            "galaxytabs7"
        ];
    }
    if (platform === "ios") {
        return [
            "ipadair",
            "iphone6s",
            "iphone6splus",
            "ipadair2",
            "iphone9",
            "iphone11pro",
            "iphone11promax"
        ];
    }

    throw new Error(`No devices for platform: ${platform}`);
};
