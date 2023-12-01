// this file is based upon similar code by https://github.com/hipstersmoothie

import React from "react";
import { useAddonState } from "@storybook/api";
import {
    IconButton,
    WithTooltip,
    TooltipLinkList,
    Icons
} from "@storybook/components";
import { DeviceSelections, getLocations } from "@storybook/native-devices";

import { ADDON_ID } from "../constants";
import { DEFAULT_STATE, restoreFromLocalStorage, saveToLocalStorage } from "../utils/localStorageUtils";

export default () => {
    const savedState = restoreFromLocalStorage(DEFAULT_STATE);

    const [state, setState] = useAddonState<DeviceSelections>(
        ADDON_ID,
        savedState
    );

    const saveState = (s: DeviceSelections) => {
        setState(s);
        saveToLocalStorage(s);
    };

    const locations = getLocations();

    return (
        <WithTooltip
            closeOnOutsideClick
            placement="top"
            trigger="click"
            tooltip={(props) => (
                <TooltipLinkList
                    links={locations
                        .map((location) => {
                            const onClick = () => {
                                saveState({
                                    androidSelection: state.iosSelection,
                                    iosSelection: state.iosSelection,
                                    androidVersion: state.androidVersion,
                                    iosVersion: state.iosVersion,
                                    location
                                });
                                props.onHide();
                            };
                            return {
                                id: location.code2,
                                title: `${location.name} (${location.city})`,
                                onClick,
                                right: location.flag,
                                value: location,
                                active: state.location.code2 === location.code2
                            };
                        })}
                />
            )}
        >
            <IconButton title="Select Country">
                <Icons icon="flag" />
            </IconButton>
        </WithTooltip>
    );
};
