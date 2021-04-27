import type { EmulatorContext } from "@storybook/native-types";
import type { SendMessageOptions } from "../types";

import EmulatorController from "../controllers/EmulatorController";
import { getNewController } from "./controllerFactory";

export default class ControllerManager {
    private controllers: EmulatorController[] = [];

    createController(context?: EmulatorContext): EmulatorController {
        const controller = getNewController(context);
        controller.createEmulator();
        this.controllers.push(controller);
        console.log(
            `Created native storybook controller for context: ${context}`
        );
        return controller;
    }

    sendMessageToControllers(options: SendMessageOptions) {
        this.controllers.forEach((controller) => {
            controller.sendMessage(options);
        });
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
