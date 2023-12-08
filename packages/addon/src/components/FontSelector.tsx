// this file is based upon similar code by https://github.com/hipstersmoothie

import React from "react";
import { useAddonState } from "@storybook/api";
import {
    IconButton,
    WithTooltip,
    TooltipLinkList,
    Icons
} from "@storybook/components";
import { DeviceSelections, getFonts } from "@storybook/native-devices";

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
    const androidFonts = getFonts("android");
    const iosFonts = getFonts("ios");

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
                    links={[
                        {
                            id: "android",
                            title: "------------ Android ------------",
                            onClick: () => {},
                            value: "",
                            disabled: true,
                            active: false
                        }
                    ]
                        .concat(
                            androidFonts.map((font) => {
                                const onClick = () => {
                                    saveState({
                                        ...state,
                                        androidFont: font
                                    });
                                    props.onHide();
                                };
                                return {
                                    id: font.value,
                                    title: font.name,
                                    onClick,
                                    value: font.value,
                                    active:
                                        state.androidFont.value === font.value,
                                    disabled: false
                                };
                            })
                        )
                        .concat({
                            id: "ios",
                            title: "-------------- iOS --------------",
                            onClick: () => {},
                            value: "",
                            disabled: true,
                            active: false
                        })
                        .concat(
                            iosFonts.map((font) => {
                                const onClick = () => {
                                    saveState({
                                        ...state,
                                        iosFont: font
                                    });
                                    props.onHide();
                                };
                                return {
                                    id: font.value,
                                    title: font.name,
                                    center: "",
                                    onClick,
                                    value: font.value,
                                    active: state.iosFont.value === font.value,
                                    disabled: false
                                };
                            })
                        )}
                />
            )}
        >
            <IconButton title="Select Font">
                <Icons icon="medium" />
            </IconButton>
        </WithTooltip>
    );
};
