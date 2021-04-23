export enum EmulatorRotation {
    vertical,
    horizontal,
    invertedVertical,
    invertedHorizontal
}

export const RotationsList = [
    EmulatorRotation.vertical,
    EmulatorRotation.horizontal,
    EmulatorRotation.invertedVertical,
    EmulatorRotation.invertedHorizontal
] as readonly EmulatorRotation[];
