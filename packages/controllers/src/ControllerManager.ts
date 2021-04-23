import type { EmulatorContext } from "@storybook/native-types";
import type { SendMessageOptions } from "./types";

import AppetizeEmulatorController from "./controllers/AppetizeEmulatorController";
import EmulatorController from "./controllers/EmulatorController";
import LocalEmulatorController from "./controllers/LocalEmulatorController";

export default class ControllerManager {
    private controllers: EmulatorController[] = [];

    createController(context?: EmulatorContext) {
        // TODO: if local dev, create local controller
        const controller = new LocalEmulatorController(context);
        // const controller = new AppetizeEmulatorController(context);
        controller.createEmulator();
        this.controllers.push(controller);
        console.log(
            `Created native storybook controller for context: ${context}`
        );
        return controller;
    }

    sendMessageToControllers(options: SendMessageOptions) {
        console.error(this.controllers);
        const promises = this.controllers.map((controller) => {
            return controller.sendMessage(options);
        });

        return Promise.all(promises);
    }

    getController(context?: EmulatorContext): EmulatorController {
        const result = this.controllers.find(
            (controller) => controller.getContext() === context
        );
        if (result) {
            return result;
        }

        return this.createController(context);
    }
}
