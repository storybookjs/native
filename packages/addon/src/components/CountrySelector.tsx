// this file is based upon similar code by https://github.com/hipstersmoothie

import React, { useEffect } from "react";
import { API, useAddonState } from "@storybook/api";
import { useGlobals } from '@storybook/manager-api';
import {
    IconButton,
    WithTooltip,
    TooltipLinkList,
    Icons
} from "@storybook/components";
import {
    DeviceSelections,
    getDefaultLocation,
    getFilteredLocations,
    getLocations
} from "@storybook/native-devices";

import { GlobalLocation } from "@storybook/native-devices/dist/types";
import { ACTION_EVENT_NAME } from "@storybook/native-controllers";
import { EmulatorActions } from "@storybook/native-types";
import { ADDON_ID } from "../constants";
import { DEFAULT_STATE, restoreFromLocalStorage, saveToLocalStorage } from "../utils/localStorageUtils";

export interface CountrySelectorProps {
    api: API;
}

let userHasSelected = false;

const getGlobalLocationsOrDefault = (globalLocationJson?: any) :GlobalLocation => {
    if (!globalLocationJson) {
        return {
            locations: getLocations()
        };
    }
    const globalLocation = JSON.parse(globalLocationJson) as GlobalLocation;
    if (globalLocation.filterCodes) {
        globalLocation.locations = getFilteredLocations(globalLocation.filterCodes);
    }
    if ((globalLocation.locations ?? []).length === 0) {
        globalLocation.locations = getLocations();
    }
    return globalLocation;
};

export default ({ api }: CountrySelectorProps) => {
    const savedState = restoreFromLocalStorage(DEFAULT_STATE);

    const [state, setState] = useAddonState<DeviceSelections>(
        ADDON_ID,
        savedState
    );

    const [{ location }] = useGlobals();

    const saveState = (s: DeviceSelections) => {
        setState(s);
        saveToLocalStorage(s);
        api?.getChannel()?.emit(ACTION_EVENT_NAME, EmulatorActions.location, s.location.latlng);
    };

    const globalLocation = getGlobalLocationsOrDefault(location);

    useEffect(() => {
        if (globalLocation.defaultCode
            && !userHasSelected
            && state.location
            && state.location.code2 !== globalLocation.defaultCode) {
            saveState({
                androidSelection: state.androidSelection,
                iosSelection: state.iosSelection,
                androidVersion: state.androidVersion,
                iosVersion: state.iosVersion,
                location: getDefaultLocation(globalLocation.defaultCode)
            });
        }
    }, []);

    return (
        <WithTooltip
            closeOnOutsideClick
            placement="top"
            trigger="click"
            tooltip={(props) => (
                <TooltipLinkList
                    links={globalLocation.locations!
                        .map((loc) => {
                            const onClick = () => {
                                userHasSelected = true;
                                saveState({
                                    androidSelection: state.androidSelection,
                                    iosSelection: state.iosSelection,
                                    androidVersion: state.androidVersion,
                                    iosVersion: state.iosVersion,
                                    location: loc
                                });
                                props.onHide();
                            };
                            return {
                                id: loc.code2,
                                title: `${loc.name} (${loc.city})`,
                                onClick,
                                right: loc.flag,
                                value: loc,
                                active: state.location.code2 === loc.code2
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
