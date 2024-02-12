import React from "react";
import { useAddonState } from "@storybook/client-api";
import { DeviceSelections, DeviceWrapper } from "@storybook/native-devices";
import { StoryContext, Renderer } from "@storybook/types";

import { ADDON_ID } from "./constants";
import { restoreFromLocalStorage } from "./utils/localStorageUtils";

export const DeviceDecorator = (
    storyFn: () => any,
    context: StoryContext<Renderer>
): React.ReactElement => {
    const { parameters } = context;
    const fallbackState = parameters[ADDON_ID];

    const [state] = useAddonState<DeviceSelections>(
        ADDON_ID,
        restoreFromLocalStorage(fallbackState)
    );

    return <DeviceWrapper {...state}>{storyFn()}</DeviceWrapper>;
};
