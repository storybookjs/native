// this file is based upon similar code by https://github.com/hipstersmoothie

import React from "react";
import { useAddonState } from "@storybook/api";
import { IconButton } from "@storybook/components";
import { DeviceSelections } from "@storybook/native-devices";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ADDON_ID } from "../constants";
import {
    DEFAULT_STATE,
    restoreFromLocalStorage,
    saveToLocalStorage
} from "../utils/localStorageUtils";

export default () => {
    const savedState = restoreFromLocalStorage(DEFAULT_STATE);

    const [state, setState] = useAddonState<DeviceSelections>(
        ADDON_ID,
        savedState
    );
    const saveState = () => {
        const newState = { ...state, isDarkTheme: !state.isDarkTheme };
        setState(newState);
        saveToLocalStorage(newState);
    };

    return (
        <IconButton title="Theme" onClick={saveState}>
            <FontAwesomeIcon
                size="sm"
                icon={state.isDarkTheme ? faSun : faMoon}
            />
        </IconButton>
    );
};
