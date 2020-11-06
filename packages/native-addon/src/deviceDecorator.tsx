import React from "react";
import { useAddonState } from "@storybook/client-api";
import { DeviceSelections, DeviceWrapper } from "@storybook/native-devices";

import { ADDON_ID } from "./constants";
import { restoreFromLocalStorage } from "./utils/localStorageUtil";

export const DeviceDecorator = (storyFn: () => any): React.ReactElement => {
    const [state] = useAddonState<DeviceSelections>(ADDON_ID);
    const selections = state || restoreFromLocalStorage();

    return <DeviceWrapper {...selections}>{storyFn()}</DeviceWrapper>;
};
