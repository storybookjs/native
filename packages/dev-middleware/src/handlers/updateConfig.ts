import { Request, Response } from "express";
import type { FullConfig, ResponseBody } from "../types";

// TODO: handle switching devices + possibly support launch options
export const postUpdateConfig = (config: FullConfig) => {
    return (req: Request, res: Response) => {
        return res.json({ message: "Config update (no-op)" } as ResponseBody);
    };
};
