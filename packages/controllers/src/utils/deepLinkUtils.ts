import debounce from "lodash.debounce";
import { logDeepLink } from "@storybook/deep-link-logger";

import type { OpenDeepLinkOptions } from "../types";
import EmulatorController from "../controllers/EmulatorController";

export const getFullDeepLinkUrl = (
    baseDeepLinkUrl: string,
    storyParams: Record<string, any>
) => {
    const qsParams = new URLSearchParams(storyParams).toString();
    return `${baseDeepLinkUrl}?${qsParams}`;
};

const undebouncedOpenDeepLink = (
    { deepLinkBaseUrl, storyParams }: OpenDeepLinkOptions,
    controller: EmulatorController
) => {
    const newAppUrl = getFullDeepLinkUrl(deepLinkBaseUrl, storyParams);
    logDeepLink(newAppUrl);
    controller.openDeepLink(newAppUrl);
};

export type OpenDeepLinkHandler = typeof undebouncedOpenDeepLink;
export const openDeepLink: OpenDeepLinkHandler = debounce(
    (options: OpenDeepLinkOptions, controller: EmulatorController) => {
        undebouncedOpenDeepLink(options, controller);
    },
    400
);
