import exec from "child_process";
import { Request, Response } from "express";
import path from "path";
import type { Platform } from "@storybook/native-types";
import type { FullConfig, ResponseBody } from "../types";

let screenshotCount = 0;

const getScreenshotFileName = () => {
    return `screenshot${screenshotCount}.png`;
};

const getCommand = (
    config: FullConfig,
    platform: Platform,
    fileName: string
) => {
    if (platform === "android") {
        const tool = config.androidCommandPath;
        return `${tool} exec-out screencap -p > ${fileName}`;
    }

    if (platform === "ios") {
        const tool = config.iosCommandPath;
        return `${tool} simctl io booted screenshot --type=png ${fileName}`;
    }

    throw new Error(`${platform} is not a valid platform`);
};

export const postSaveScreenshot = (config: FullConfig) => {
    return (req: Request, res: Response) => {
        const { platform } = req.body;
        try {
            const fileName = path.join(process.cwd(), getScreenshotFileName());
            exec.execSync(getCommand(config, platform, fileName), {
                timeout: config.timeout
            });
            screenshotCount += 1;
            res.json({
                message: `Saved screenshot to ${fileName}`
            } as ResponseBody);
        } catch (ex: any) {
            console.error(ex);
            res.status(400).json({
                message: ex.toString()
            } as ResponseBody);
        }
    };
};
