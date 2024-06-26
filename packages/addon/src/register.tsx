import React from "react";
import { Provider } from "react-redux";
import { addons, types } from "@storybook/addons";
import { Icons, IconButton } from "@storybook/components";
import { ACTION_EVENT_NAME, store } from "@storybook/native-controllers";
import { DeepLinksContainer } from "@storybook/deep-link-logger";
import { EmulatorActions } from "@storybook/native-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUndo,
    faRedo,
    faCircleStop,
    faBars,
    faHome,
    faRefresh,
    faMagnifyingGlassChart,
    faMobile
} from "@fortawesome/free-solid-svg-icons";

import {
    ADDON_ID,
    DEEP_LINKS_PARAM_KEY,
    MAP_PARAM_KEY,
    MEDIA_PARAM_KEY,
    NETWORK_LOGS_PARAM_KEY
} from "./constants";
import DeviceSelector from "./components/DeviceSelector";
import VersionSelector from "./components/VersionSelector";
import CountrySelector from "./components/CountrySelector";
import MapContainer from "./components/MapContainer";
import NetworkLogsContainer from "./components/NetworkLogsContainer";
import LogsContainer from "./components/LogsContainer";
import FontSelector from "./components/FontSelector";
import ThemeSelector from "./components/ThemeSelector";
import DeveloperOptionsSelector from "./components/DeveloperOptionsSelector";
import MediaContainer from "./components/MediaContainer";

addons.register(ADDON_ID, (api) => {
    const rotateLeft = () => {
        api?.getChannel()?.emit(ACTION_EVENT_NAME, EmulatorActions.rotateLeft);
    };

    const rotateRight = () => {
        api?.getChannel()?.emit(ACTION_EVENT_NAME, EmulatorActions.rotateRight);
    };

    const restartApp = () => {
        api?.getChannel()?.emit(ACTION_EVENT_NAME, EmulatorActions.restartApp);
    };

    const clickHomeButton = () => {
        api?.getChannel()?.emit(
            ACTION_EVENT_NAME,
            EmulatorActions.clickHomeButton
        );
    };

    const stopApp = () => {
        api?.getChannel()?.emit(ACTION_EVENT_NAME, EmulatorActions.stopApp);
    };

    const overviewApps = () => {
        api?.getChannel()?.emit(
            ACTION_EVENT_NAME,
            EmulatorActions.overviewApps
        );
    };

    const toggleFirebaseDebugView = () => {
        api?.getChannel()?.emit(
            ACTION_EVENT_NAME,
            EmulatorActions.toggleFirebaseDebugView
        );
    };

    const shakeDevice = () => {
        api?.getChannel()?.emit(ACTION_EVENT_NAME, EmulatorActions.shakeDevice);
    };

    const captureScreenshot = () => {
        api?.getChannel()?.emit(
            ACTION_EVENT_NAME,
            EmulatorActions.saveScreenshot
        );
    };

    addons.add(`${ADDON_ID}/clickHome`, {
        type: types.TOOL,
        title: "Home",
        render: () => (
            <IconButton title="Click Home" onClick={clickHomeButton}>
                <FontAwesomeIcon size="sm" icon={faHome} />
            </IconButton>
        )
    });

    addons.add(`${ADDON_ID}/restartApp`, {
        type: types.TOOL,
        title: "Restart App",
        render: () => (
            <IconButton title="Restart App" onClick={restartApp}>
                <FontAwesomeIcon size="sm" icon={faRefresh} />
            </IconButton>
        )
    });

    addons.add(`${ADDON_ID}/stopApp`, {
        type: types.TOOL,
        title: "Stop App",
        render: () => (
            <IconButton title="Stop App" onClick={stopApp}>
                <FontAwesomeIcon size="sm" icon={faCircleStop} />
            </IconButton>
        )
    });

    addons.add(`${ADDON_ID}/overviewApps`, {
        type: types.TOOL,
        title: "Overview Apps",
        render: () => (
            <IconButton title="Overview Apps" onClick={overviewApps}>
                <FontAwesomeIcon
                    size="sm"
                    style={{ transform: "rotate(90deg)" }}
                    icon={faBars}
                />
            </IconButton>
        )
    });

    addons.add(`${ADDON_ID}/shakeDevice`, {
        type: types.TOOL,
        title: "Shake Device",
        render: () => (
            <IconButton title="Shake Device" onClick={shakeDevice}>
                <FontAwesomeIcon size="sm" icon={faMobile} />
            </IconButton>
        )
    });

    addons.add(`${ADDON_ID}/toggleFirebaseDebugView`, {
        type: types.TOOL,
        title: "Enable Firebase Debug View",
        render: () => (
            <IconButton
                title="Enable Firebase Debug View"
                onClick={toggleFirebaseDebugView}
            >
                <FontAwesomeIcon size="sm" icon={faMagnifyingGlassChart} />
            </IconButton>
        )
    });

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

    addons.add(`${ADDON_ID}/themePicker`, {
        type: types.TOOL,
        title: "Toggle Theme",
        render: () => <ThemeSelector />
    });

    addons.add(`${ADDON_ID}/fontPicker`, {
        type: types.TOOL,
        title: "Select Font",
        render: () => <FontSelector />
    });

    addons.add(`${ADDON_ID}/countryPicker`, {
        type: types.TOOL,
        title: "Select country",
        render: () => <CountrySelector api={api} />
    });

    addons.add(`${ADDON_ID}/developerOptions`, {
        type: types.TOOL,
        title: "Developer Options",
        render: () => <DeveloperOptionsSelector api={api} />
    });

    addons.add(`${ADDON_ID}/deepLinks/panel`, {
        title: "Deep links",
        type: types.PANEL,
        render: ({ active }) => (
            <DeepLinksContainer api={api} active={active} />
        ),
        paramKey: DEEP_LINKS_PARAM_KEY
    });

    addons.add(`${ADDON_ID}/logs/panel`, {
        title: "Logs",
        type: types.PANEL,
        render: ({ active }) => (
            <Provider store={store}>
                <LogsContainer api={api} active={active} />
            </Provider>
        ),
        paramKey: NETWORK_LOGS_PARAM_KEY
    });

    addons.add(`${ADDON_ID}/network-logs/panel`, {
        title: "Network Logs",
        type: types.PANEL,
        render: ({ active }) => (
            <Provider store={store}>
                <NetworkLogsContainer api={api} active={active} />
            </Provider>
        ),
        paramKey: NETWORK_LOGS_PARAM_KEY
    });

    addons.add(`${ADDON_ID}/map/panel`, {
        title: "Map",
        type: types.PANEL,
        render: ({ active }) => <MapContainer api={api} active={active} />,
        paramKey: MAP_PARAM_KEY
    });

    addons.add(`${ADDON_ID}/media/panel`, {
        title: "Media",
        type: types.PANEL,
        render: ({ active }) => <MediaContainer api={api} active={active} />,
        paramKey: MEDIA_PARAM_KEY
    });
});
