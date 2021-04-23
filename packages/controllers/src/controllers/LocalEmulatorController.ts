/* eslint-disable class-methods-use-this */
import type { EmulatorContext } from "@storybook/native-types";
import axios from "axios";

import { EmulatorActions } from "../actions";
import { EmulatorRotation } from "../rotations";
import type { EmulatorConfig, SendMessageOptions } from "../types";
import { getNextRotation, getPreviousRotation } from "../utils/rotationUtils";
import EmulatorController from "./EmulatorController";

export default class LocalEmulatorController implements EmulatorController {
    private emulatorContext: EmulatorContext | undefined = undefined;

    private config: EmulatorConfig | undefined = undefined;

    private rotationMode: EmulatorRotation = EmulatorRotation.vertical;

    constructor(context?: EmulatorContext) {
        this.emulatorContext = context;
    }

    private updateRotation(newRotation: EmulatorRotation): Promise<void> {
        this.rotationMode = newRotation;

        return axios.post("/rotation", {
            platform: this.config?.platform,
            mode: newRotation
        });
    }

    sendMessage({ message }: SendMessageOptions): Promise<void> {
        if (!this.config) {
            throw new Error(
                `No config was set for emulator: ${this.emulatorContext}`
            );
        }

        if (message === EmulatorActions.rotateLeft) {
            const newRotation = getPreviousRotation(this.rotationMode);
            return this.updateRotation(newRotation);
        }

        if (message === EmulatorActions.rotateRight) {
            const newRotation = getNextRotation(this.rotationMode);
            return this.updateRotation(newRotation);
        }

        if (message === EmulatorActions.captureScreenshot) {
            // TODO
        }

        return Promise.resolve();
    }

    // TODO: start up emulator if needed
    createEmulator(): void {}

    // TODO: implement
    destroyEmulator(): void {
        throw new Error("Method not implemented.");
    }

    openDeepLink(deepLinkUrl: string): Promise<void> {
        if (!this.config) {
            throw new Error(
                `No config was set for emulator: ${this.emulatorContext}`
            );
        }

        return axios.post("/deepLink", {
            platform: this.config.platform,
            url: deepLinkUrl
        });
    }

    getContext() {
        return this.emulatorContext;
    }

    updateConfig(config: EmulatorConfig) {
        this.config = config;
        return axios.post("/updateConfig", {
            config
        });
    }
}
