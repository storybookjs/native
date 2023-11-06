import exec from "child_process";
import { Request, Response } from "express";
import type { Platform } from "@storybook/native-types";
import type { FullConfig, ResponseBody } from "../types";

const getDeepLinkCommand = (
    config: FullConfig,
    platform: Platform,
    url: string
) => {
    if (platform === "android") {
        const tool = config.androidCommandPath;
        return `${tool} shell 'am start -W -a android.intent.action.VIEW -c android.intent.category.BROWSABLE -d "${url}"'`;
    }

    if (platform === "ios") {
        const tool = config.iosCommandPath;
        return `${tool} simctl openurl booted "${url}"`;
    }

    throw new Error(`${platform} is not a valid platform`);
};

export const postDeepLink = (config: FullConfig) => {
    return (req: Request, res: Response) => {
        const { platform, url } = req.body;
        try {
            const output = exec
                .execSync(getDeepLinkCommand(config, platform, url), {
                    timeout: config.timeout
                })
                .toString();
            res.json({ message: output } as ResponseBody);
        } catch (ex: any) {
            console.error(ex);
            res.status(400).json({
                message: ex.toString()
            } as ResponseBody);
        }
    };
};
