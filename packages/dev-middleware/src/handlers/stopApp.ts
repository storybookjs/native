/* eslint-disable max-len */
import exec from "child_process";
import { Request, Response } from "express";
import { Platform } from "@storybook/native-types";
import { FullConfig, ResponseBody } from "../types";

const getCommand = (
    config: FullConfig,
    platform: Platform,
    applicationId: string
) => {
    if (platform === "android") {
        const tool = config.androidCommandPath;
        return `${tool} shell am force-stop ${applicationId}`;
    }

    if (platform === "ios") {
        const tool = config.iosCommandPath;
        return `${tool} simctl terminate booted ${applicationId}`;
    }

    throw new Error(`${platform} is not a valid platform`);
};

export const postStopApp = (config: FullConfig) => {
    return (req: Request, res: Response) => {
        const { platform, applicationId } = req.body;
        try {
            const output = exec
                .execSync(getCommand(config, platform, applicationId), {
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
