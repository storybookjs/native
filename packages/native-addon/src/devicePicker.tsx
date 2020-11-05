import React from "react";
import { useAddonState, useParameter } from "@storybook/api";
import {
  IconButton,
  WithTooltip,
  TooltipLinkList,
  Icons,
} from "@storybook/components";
import { getDevices } from "@storybook/native-devices";
import { State } from "@storybook/native-devices";

import { ADDON_ID } from "./constants";
import { DEFAULT_STATE, restoreLocalStorage, saveLocalStorage } from "./utils/localStorageUtil";

const PARAMETER_NAME = 'DEVICE_PICKER';

export const DeviceSelectorTool = (): React.ReactElement => {
  const defaultState = useParameter<Partial<State>>(PARAMETER_NAME, DEFAULT_STATE);
  const initial = restoreLocalStorage(defaultState);
  const [state, setState] = useAddonState<State>(ADDON_ID, initial);
  const androidDevices = getDevices("android");
  const iosDevices = getDevices("ios");

  const saveState = (s: State) => {
    setState(s);
    saveLocalStorage(s);
  };

  return (
    <WithTooltip
      closeOnClick
      placement="top"
      trigger="click"
      tooltip={(props) => {
        const { onHide } = props;

        return (
          <TooltipLinkList
            links={androidDevices.map((device) => {
              const onClick = () => {
                saveState({
                  androidSelection: device,
                  iosSelection: state.iosSelection
                });
                onHide();
              };
              return {
                id: device,
                title: device,
                onClick,
                value: device,
                active: state.androidSelection === device,
                left: 'Android'
              };
            }).concat(
              iosDevices.map((device) => {
                const onClick = () => {
                  saveState({
                    androidSelection: state.androidSelection,
                    iosSelection: device
                  });
                  onHide();
                };
                return {
                  id: device,
                  title: device,
                  onClick,
                  value: device,
                  active: state.iosSelection === device,
                  left: 'iOS'
                };
              })
            )}
          />
        );
      }}
    >
      <IconButton title="Select device">
        <Icons icon="tablet" />
      </IconButton>
    </WithTooltip>
  );
};
