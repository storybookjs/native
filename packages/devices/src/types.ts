import { Location } from "@storybook/native-types";

export interface DeviceSelections {
    androidSelection: string;
    iosSelection: string;
    iosVersion: string;
    androidVersion: string;
    location: Location;
    networkLogs: boolean;
}
