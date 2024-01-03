import { Platform, Font } from "@storybook/native-types";

export const getFonts = (platform: Platform): Font[] => {
    if (platform === "android") {
        return [
            { name: "Small", value: "0.85" },
            { name: "Default", value: "1.00" },
            { name: "Large", value: "1.15" },
            { name: "Larger", value: "1.30" }
        ];
    }
    if (platform === "ios") {
        return [
            { name: "Extra Small", value: "UICTContentSizeCategoryXS" },
            { name: "Small", value: "UICTContentSizeCategoryS" },
            { name: "Medium", value: "UICTContentSizeCategoryM" },
            { name: "Large", value: "UICTContentSizeCategoryL" },
            { name: "Extra Large", value: "UICTContentSizeCategoryXL" },
            { name: "Double Extra Large", value: "UICTContentSizeCategoryXXL" },
            {
                name: "Triple Extra Large",
                value: "UICTContentSizeCategoryXXXL"
            },
            {
                name: "Accessibility Medium",
                value: "UICTContentSizeCategoryAccessibilityM"
            },
            {
                name: "Accessibility Large",
                value: "UICTContentSizeCategoryAccessibilityL"
            },
            {
                name: "Accessibility Extra Large",
                value: "UICTContentSizeCategoryAccessibilityXL"
            },
            {
                name: "Accessibility Double Extra Large",
                value: "UICTContentSizeCategoryAccessibilityXXL"
            },
            {
                name: "Accessibility Triple Extra Large",
                value: "UICTContentSizeCategoryAccessibilityXXXL"
            }
        ];
    }

    throw new Error(`No font for platform: ${platform}`);
};

export const getDefaultFont = (platform: Platform): Font => {
    if (platform === "android") {
        return { name: "Default", value: "1.00" };
    }
    if (platform === "ios") {
        return { name: "Medium", value: "UICTContentSizeCategoryM" };
    }

    throw new Error(`No font for platform: ${platform}`);
};
