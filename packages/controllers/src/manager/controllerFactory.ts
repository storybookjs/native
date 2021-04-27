import { EmulatorContext } from "@storybook/native-types";
import AppetizeEmulatorController from "../controllers/AppetizeEmulatorController";
import EmulatorController from "../controllers/EmulatorController";
import LocalEmulatorController from "../controllers/LocalEmulatorController";

export const getNewController = (
    context?: EmulatorContext
): EmulatorController => {
    if (process.env.STORYBOOK_NATIVE_LOCAL_EMULATOR) {
        return new LocalEmulatorController(context);
    }

    return new AppetizeEmulatorController(context);
};
