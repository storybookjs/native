// this file is based upon similar code by https://github.com/hipstersmoothie

import React from "react";
import { useAddonState } from "@storybook/api";
import {
    IconButton,
    WithTooltip,
    TooltipLinkList,
    Icons
} from "@storybook/components";
import { DeviceSelections, getOsVersions } from "@storybook/native-devices";

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
    const androidVersions = getOsVersions("android");
    const iosVersions = getOsVersions("ios");

    const saveState = (s: DeviceSelections) => {
        setState(s);
        saveToLocalStorage(s);
    };

    return (
        <WithTooltip
            closeOnClick
            placement="top"
            trigger="click"
            tooltip={(props) => (
                <TooltipLinkList
                    links={androidVersions
                        .map((version) => {
                            const onClick = () => {
                                saveState({
                                    androidSelection: state.androidSelection,
                                    iosSelection: state.iosSelection,
                                    androidVersion: version,
                                    iosVersion: state.iosVersion
                                });
                                props.onHide();
                            };
                            return {
                                id: version,
                                title: version,
                                onClick,
                                value: version,
                                active: state.androidVersion === version,
                                left: "Android"
                            };
                        })
                        .concat(
                            iosVersions.map((version) => {
                                const onClick = () => {
                                    saveState({
                                        androidSelection:
                                            state.androidSelection,
                                        iosSelection: state.iosSelection,
                                        iosVersion: version,
                                        androidVersion: state.androidVersion
                                    });
                                    props.onHide();
                                };
                                return {
                                    id: version,
                                    title: version,
                                    onClick,
                                    value: version,
                                    active: state.iosVersion === version,
                                    left: "iOS"
                                };
                            })
                        )}
                />
            )}
        >
            <IconButton title="Select OS Version">
                <Icons icon="cpu" />
            </IconButton>
        </WithTooltip>
    );
};
