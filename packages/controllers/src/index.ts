import ControllerManager from "./ControllerManager";

export * from "./utils/getAppetizeUrl";
export * from "./utils/iframeUtils";
export * from "./utils/deepLinkUtils";
export * from "./constants";
export * from "./actions";
export * from "./rotations";

export { default as AppetizeEmulatorController } from "./controllers/AppetizeEmulatorController";
export { default as EmulatorController } from "./controllers/EmulatorController";

// TODO: method that handles this by checking what window the code is running in
// TODO: do this somehow without attaching data to the window
declare global {
    interface Window {
        nativeStorybookControllers: any;
    }
}
let lControllerManager: ControllerManager = window.nativeStorybookControllers;
if (!lControllerManager) {
    window.nativeStorybookControllers = new ControllerManager();
    lControllerManager = window.nativeStorybookControllers;
}

export const controllerManager = lControllerManager;
