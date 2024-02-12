// this file is based upon similar code by https://github.com/hipstersmoothie

import React from "react";
import { useAddonState } from "@storybook/api";
import {
    IconButton,
    WithTooltip,
    TooltipLinkList,
    Icons
} from "@storybook/components";
import { getDevices, DeviceSelections } from "@storybook/native-devices";

import { ADDON_ID } from "../constants";
import {
    restoreFromLocalStorage,
    saveToLocalStorage
} from "../utils/localStorageUtils";

export default () => {
    const savedState = restoreFromLocalStorage();

    const [state, setState] = useAddonState<DeviceSelections>(
        ADDON_ID,
        savedState
    );
    const androidDevices = getDevices("android");
    const iosDevices = getDevices("ios");

    const saveState = (s: DeviceSelections) => {
        setState(s);
        saveToLocalStorage(s);
    };

    return (
        <WithTooltip
            closeOnOutsideClick
            placement="top"
            trigger="click"
            tooltip={(props) => (
                <TooltipLinkList
                    links={androidDevices
                        .map((device) => {
                            const onClick = () => {
                                saveState({
                                    ...state,
                                    androidSelection: device
                                });
                                props.onHide();
                            };
                            return {
                                id: device,
                                title: `Android ${device}`,
                                onClick,
                                value: device,
                                active: state.androidSelection === device
                            };
                        })
                        .concat(
                            iosDevices.map((device) => {
                                const onClick = () => {
                                    saveState({
                                        ...state,
                                        iosSelection: device
                                    });
                                    props.onHide();
                                };
                                return {
                                    id: device,
                                    title: `iOS ${device}`,
                                    onClick,
                                    value: device,
                                    active: state.iosSelection === device
                                };
                            })
                        )}
                />
            )}
        >
            <IconButton title="Select device">
                <Icons icon="tablet" />
            </IconButton>
        </WithTooltip>
    );
};
