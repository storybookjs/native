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
            "pixel6",
            "pixel6pro",
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
            "iphone11promax",
            "iphone12",
            "iphone12mini",
            "iphone12pro",
            "iphone12promax"
        ];
    }

    throw new Error(`No devices for platform: ${platform}`);
};
