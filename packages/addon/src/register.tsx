import React from "react";
import { addons, types } from "@storybook/addons";
import { Icons, IconButton } from "@storybook/components";
import { ACTION_EVENT_NAME } from "@storybook/native-controllers";
import { DeepLinksContainer } from "@storybook/deep-link-logger";
import { EmulatorActions } from "@storybook/native-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faRedo } from "@fortawesome/free-solid-svg-icons";

import { ADDON_ID, DEEP_LINKS_PARAM_KEY } from "./constants";
import DeviceSelector from "./components/DeviceSelector";
import VersionSelector from "./components/VersionSelector";

addons.register(ADDON_ID, (api) => {
    const rotateLeft = () => {
        api.getChannel().emit(ACTION_EVENT_NAME, EmulatorActions.rotateLeft);
    };

    const rotateRight = () => {
        api.getChannel().emit(ACTION_EVENT_NAME, EmulatorActions.rotateRight);
    };

    const captureScreenshot = () => {
        api.getChannel().emit(
            ACTION_EVENT_NAME,
            EmulatorActions.saveScreenshot
        );
    };

    addons.add(`${ADDON_ID}/rotateLeft`, {
        type: types.TOOL,
        title: "Rotate left",
        render: () => (
            <IconButton title="Rotate left" onClick={rotateLeft}>
                <FontAwesomeIcon size="sm" icon={faUndo} />
            </IconButton>
        )
    });

    addons.add(`${ADDON_ID}/rotateRight`, {
        type: types.TOOL,
        title: "Rotate right",
        render: () => (
            <IconButton title="Rotate right" onClick={rotateRight}>
                <FontAwesomeIcon size="sm" icon={faRedo} />
            </IconButton>
        )
    });

    addons.add(`${ADDON_ID}/captureScreenshot`, {
        type: types.TOOL,
        title: "Capture screenshot",
        render: () => (
            <IconButton title="Capture screenshot" onClick={captureScreenshot}>
                <Icons icon="camera" />
            </IconButton>
        )
    });

    addons.add(`${ADDON_ID}/devicePicker`, {
        type: types.TOOL,
        title: "Select device",
        render: () => <DeviceSelector />
    });

    addons.add(`${ADDON_ID}/versionPicker`, {
        type: types.TOOL,
        title: "Select device",
        render: () => <VersionSelector />
    });

    addons.add(`${ADDON_ID}/deepLinks/panel`, {
        title: "Deep links",
        type: types.PANEL,
        render: ({ active, key }) => (
            <DeepLinksContainer key={key} api={api} active={active} />
        ),
        paramKey: DEEP_LINKS_PARAM_KEY
    });
});
