/* eslint-disable class-methods-use-this */
import {
    EmulatorContext,
    EmulatorConfig,
    EmulatorActions,
    EmulatorRotation
} from "@storybook/native-types";
import { debounce } from "lodash";
import { logDeepLink } from "@storybook/deep-link-logger";

import { performCommand } from "../state/commandsSlice";
import { dispatchThunk } from "../state/store";

import type { SendMessageOptions } from "../types";
import { getNextRotation, getPreviousRotation } from "../utils/rotationUtils";
import EmulatorController from "./EmulatorController";

export default class LocalEmulatorController implements EmulatorController {
    private emulatorContext: EmulatorContext | undefined = undefined;

    private config: EmulatorConfig | undefined = undefined;

    private rotationMode: EmulatorRotation = EmulatorRotation.vertical;

    constructor(context?: EmulatorContext) {
        this.emulatorContext = context;
    }

    private updateRotation(newRotation: EmulatorRotation) {
        this.rotationMode = newRotation;

        const thunk = performCommand("/rotation", {
            platform: this.config?.platform,
            rotationMode: newRotation
        });
        dispatchThunk(thunk);
    }

    private stopApp(applicationId?: string) {
        const thunk = performCommand("/stopApp", {
            platform: this.config?.platform,
            applicationId
        });
        dispatchThunk(thunk);
    }

    private saveScreenshot() {
        const thunk = performCommand("/screenshot", {
            platform: this.config?.platform
        });
        dispatchThunk(thunk);
    }

    sendMessage({ message, applicationId }: SendMessageOptions) {
        if (!this.config) {
            throw new Error(
                `No config was set for emulator: ${this.emulatorContext}`
            );
        }

        if (message === EmulatorActions.rotateLeft) {
            const newRotation = getPreviousRotation(this.rotationMode);
            this.updateRotation(newRotation);
        } else if (message === EmulatorActions.rotateRight) {
            const newRotation = getNextRotation(this.rotationMode);
            this.updateRotation(newRotation);
        } else if (message === EmulatorActions.stopApp) {
            this.stopApp(applicationId);
        } else if (message === EmulatorActions.saveScreenshot) {
            this.saveScreenshot();
        }
    }

    // TODO: start up emulator if needed
    createEmulator(): void {}

    private undebouncedOpenDeepLink(deepLinkUrl: string) {
        logDeepLink(deepLinkUrl);
        if (!this.config) {
            throw new Error(
                `No config was set for emulator: ${this.emulatorContext}`
            );
        }

        const thunk = performCommand("/deepLink", {
            platform: this.config?.platform,
            url: deepLinkUrl
        });
        dispatchThunk(thunk);
    }

    public openDeepLink = debounce((deepLinkUrl: string) => {
        this.undebouncedOpenDeepLink(deepLinkUrl);
    }, 400);

    getContext() {
        return this.emulatorContext;
    }

    updateConfig(config: EmulatorConfig) {
        this.config = config;

        // TODO: this is disabled because we do not do anything server side with the config
        // in the future, this can be used to change the emulated device or set launch arguments
        /* const thunk = performCommand("/updateConfig", {
            config
        });
        dispatchThunk(thunk); */
    }
}
