// this file is based upon similar code by https://github.com/hipstersmoothie

import React, { useState } from "react";
import { API } from "@storybook/api";
import {
    IconButton,
    WithTooltip,
    TooltipLinkList,
    Icons
} from "@storybook/components";

import { ACTION_EVENT_NAME } from "@storybook/native-controllers";
import { EmulatorActions } from "@storybook/native-types";

export interface DeveloperOptionsSelectorProps {
    api: API;
}

export default ({ api }: DeveloperOptionsSelectorProps) => {
    const [options, setOptions] = useState([
        {
            id: "layout_bounds",
            name: "Show layout bounds",
            value: false
        },
        {
            id: "profile_gpu_rendering",
            name: "Profile GPU rendering",
            value: false
        },
        {
            id: "over_draw",
            name: "Show Overdraw",
            value: false
        }
        // Not working as expected
        // {
        //     id: "dont_keep_activities",
        //     name: "Don't keep activities",
        //     value: false,
        // },
    ]);

    const toggleShowLayoutBounds = (enabled: boolean) => {
        api.getChannel()?.emit(
            ACTION_EVENT_NAME,
            EmulatorActions.showLayoutBounds,
            null, // location
            enabled
        );
    };

    const toggleProfileGpuRendering = (enabled: boolean) => {
        api.getChannel()?.emit(
            ACTION_EVENT_NAME,
            EmulatorActions.profileGpuRendering,
            null, // location
            enabled
        );
    };

    const toggleShowOverdraw = (enabled: boolean) => {
        api.getChannel()?.emit(
            ACTION_EVENT_NAME,
            EmulatorActions.showOverdraw,
            null, // location
            enabled
        );
    };

    const toggleDontKeepActivity = (enabled: boolean) => {
        api.getChannel()?.emit(
            ACTION_EVENT_NAME,
            EmulatorActions.dontKeepActivities,
            null, // location
            enabled
        );
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
                            title: "------------- Android -------------",
                            onClick: () => {},
                            value: "",
                            disabled: true,
                            active: false
                        }
                    ].concat(
                        options.map((option) => {
                            const onClick = () => {
                                switch (option.id) {
                                    case "layout_bounds":
                                        toggleShowLayoutBounds(!option.value);
                                        break;
                                    case "profile_gpu_rendering":
                                        toggleProfileGpuRendering(
                                            !option.value
                                        );
                                        break;
                                    case "over_draw":
                                        toggleShowOverdraw(!option.value);
                                        break;
                                    case "dont_keep_activities":
                                        toggleDontKeepActivity(!option.value);
                                        break;
                                    default:
                                        break;
                                }
                                setOptions(
                                    options.map((o) => {
                                        if (o.id === option.id) {
                                            return {
                                                ...o,
                                                value: !o.value
                                            };
                                        }
                                        return o;
                                    })
                                );
                                props.onHide();
                            };
                            return {
                                id: option.id,
                                title: `${option.name}`,
                                right: `${option.value}`,
                                onClick,
                                value: option.value.toString(),
                                active: false,
                                disabled: false
                            };
                        })
                    )}
                />
            )}
        >
            <IconButton title="Developer Options">
                <Icons icon="cog" />
            </IconButton>
        </WithTooltip>
    );
};
