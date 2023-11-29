import { Application, json } from "express";
import { getCompleteConfig } from "./configUtils";
import { postDeepLink } from "./handlers/deepLink";
import { postSaveScreenshot } from "./handlers/saveScreenshot";
import { postSetRotation } from "./handlers/setRotation";
import { postUpdateConfig } from "./handlers/updateConfig";
import type { NativeDevMiddlewareConfig } from "./types";

export const middleware = (config: NativeDevMiddlewareConfig = {}) => {
    const fullConfig = getCompleteConfig(config);
    return (app: Application) => {
        app.use(json());
        app.post("/deepLink", postDeepLink(fullConfig));
        app.post("/updateConfig", postUpdateConfig());
        app.post("/screenshot", postSaveScreenshot(fullConfig));
        app.post("/rotation", postSetRotation(fullConfig));
    };
};
