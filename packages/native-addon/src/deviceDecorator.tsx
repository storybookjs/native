import React from "react";
import { useAddonState as useClientAddonState } from "@storybook/client-api";
import { State, DeviceWrapper } from "@storybook/native-devices";

import { ADDON_ID } from "./constants";
import { restoreLocalStorage } from "./utils/localStorageUtil";

export const DeviceDecorator = (
  storyFn: (storyParams: Record<string, any>) => React.ReactNode
): React.ReactElement => {
  const [state] = useClientAddonState<State>(ADDON_ID);
  const loadedState = state || restoreLocalStorage();
  
  return (
    <DeviceWrapper {...loadedState}>
      {storyFn(loadedState)}
    </DeviceWrapper>
  );
};
