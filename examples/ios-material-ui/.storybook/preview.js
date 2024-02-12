import { DeviceDecorator } from "@storybook/native-addon";

export const decorators = [DeviceDecorator];

export const parameters = {
    native: {
        iosSelection: "iphone12pro",
        iosVersion: "15.5"
    }
};
