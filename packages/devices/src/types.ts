import { Font, Location } from "@storybook/native-types";

export interface DeviceSelections {
    androidSelection: string;
    iosSelection: string;

    iosVersion: string;
    androidVersion: string;

    androidFont: Font;
    iosFont: Font;

    location: Location;
    networkLogs: boolean;
    logs: boolean;
}
