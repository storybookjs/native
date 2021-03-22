import { addons } from "@storybook/addons";

import { DEEP_LINKS_EVENT_ID } from "./constants";

export const logDeepLink = (url: string) => {
    const channel = addons.getChannel();
    channel.emit(DEEP_LINKS_EVENT_ID, url);
};
