import { Platform } from "@storybook/native-types";

export const getDefaultDevice = (platform: Platform): string => {
    if (platform === "android") {
        return "nexus5";
    }
    if (platform === "ios") {
        return "iphone14pro";
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
            "iphone12promax",
            "iphone14pro",
            "iphone14promax"
        ];
    }

    throw new Error(`No devices for platform: ${platform}`);
};

export const getDefaultOsVersion = (platform: Platform): string => {
    if (platform === "android") {
        return "11.0";
    }
    if (platform === "ios") {
        return "16.0";
    }

    throw new Error(`No osVersion for platform: ${platform}`);
};

export const getOsVersions = (platform: Platform): string[] => {
    if (platform === "android") {
        return [
            "4.4",
            "5.1",
            "6.0",
            "7.1",
            "8.1",
            "9.0",
            "10.0",
            "11.0",
            "12.0"
        ];
    }
    if (platform === "ios") {
        return ["11.4", "12.4", "13.7", "14.5", "15.5", "16.0"];
    }

    throw new Error(`No osVersions for platform: ${platform}`);
};
