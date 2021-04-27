/* eslint-disable max-len */
import exec from "child_process";
import { Request, Response } from "express";
import { Platform, EmulatorRotation } from "@storybook/native-types";
import { FullConfig, ResponseBody } from "../types";

const getCommand = (
    config: FullConfig,
    platform: Platform,
    mode: EmulatorRotation
) => {
    if (platform === "android") {
        throw new Error(`Rotations are not supported on Android`);
        // TODO: below commands rotate the app but not the emulator
        /* const tool = config.androidCommandPath;
    return `${tool} shell settings put system accelerometer_rotation 0 && ${tool} shell settings put system user_rotation ${mode}`;
    */
    }

    if (platform === "ios") {
        throw new Error(`Rotations are not supported on iOS`);
    }

    throw new Error(`${platform} is not a valid platform`);
};

export const postSetRotation = (config: FullConfig) => {
    return (req: Request, res: Response) => {
        const { platform, rotationMode } = req.body;
        try {
            const output = exec
                .execSync(getCommand(config, platform, rotationMode), {
                    timeout: config.timeout
                })
                .toString();
            res.json({ message: output } as ResponseBody);
        } catch (ex) {
            console.error(ex);
            res.status(400).json({
                message: ex.toString()
            } as ResponseBody);
        }
    };
};
