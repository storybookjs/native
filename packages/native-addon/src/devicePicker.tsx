// this file is based upon similar code by https://github.com/hipstersmoothie

import React from "react";
import { useAddonState } from "@storybook/api";
import {
  IconButton,
  WithTooltip,
  TooltipLinkList,
  Icons
} from "@storybook/components";
import { getDevices } from "@storybook/native-devices";
import { DeviceSelections } from "@storybook/native-devices";

import { ADDON_ID } from "./constants";
import { DEFAULT_STATE, restoreFromLocalStorage, saveToLocalStorage } from "./utils/localStorageUtil";

export const DeviceSelectorTool = (): React.ReactElement => {
  const savedState = restoreFromLocalStorage(DEFAULT_STATE);

  const [state, setState] = useAddonState<DeviceSelections>(ADDON_ID, savedState);
  const androidDevices = getDevices("android");
  const iosDevices = getDevices("ios");

  const saveState = (s: DeviceSelections) => {
    setState(s);
    saveToLocalStorage(s);
  };

  return (
    <WithTooltip
      closeOnClick
      placement="top"
      trigger="click"
      tooltip={(props) => {
        return (
          <TooltipLinkList
            links={androidDevices.map((device) => {
              const onClick = () => {
                saveState({
                  androidSelection: device,
                  iosSelection: state.iosSelection
                });
                props.onHide();
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
                  props.onHide();
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
