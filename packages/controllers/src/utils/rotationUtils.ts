import { EmulatorRotation, RotationsList } from "@storybook/native-types";

export const getPreviousRotation = (
    rotation: EmulatorRotation
): EmulatorRotation => {
    const index = RotationsList.findIndex((val) => val === rotation);
    if (index === 0) {
        return RotationsList[RotationsList.length - 1];
    }

    return RotationsList[index - 1];
};

export const getNextRotation = (
    rotation: EmulatorRotation
): EmulatorRotation => {
    const index = RotationsList.findIndex((val) => val === rotation);
    const newIndex = (index + 1) % RotationsList.length;
    return RotationsList[newIndex];
};
