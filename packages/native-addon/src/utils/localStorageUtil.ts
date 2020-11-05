import { getDefaultDevice, getDevices } from "@storybook/native-devices";
import { State } from "@storybook/native-devices";

import { ADDON_ID } from "../constants";

const LOCAL_STORAGE_NAME = `${ADDON_ID}-storage`;
export const DEFAULT_STATE: State = {
  androidSelection: getDefaultDevice("android"),
  iosSelection: getDefaultDevice("ios")
};

export const saveLocalStorage = (data: State) => {
  window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(data));
};

export const restoreLocalStorage = (state?: Partial<State>): State => {
  const data = window.localStorage.getItem(LOCAL_STORAGE_NAME);
  const androidDevices = getDevices("android");
  const iosDevices = getDevices("ios");

  if (data) {
    const storedSelections = JSON.parse(data) as State;

    if (!androidDevices.includes(storedSelections.androidSelection)) {
      storedSelections.androidSelection = getDefaultDevice("android");
    }

    if (!iosDevices.includes(storedSelections.iosSelection)) {
      storedSelections.iosSelection = getDefaultDevice("ios");
    }

    return storedSelections;
  }

  return {
    ...DEFAULT_STATE,
    ...state
  };
};
