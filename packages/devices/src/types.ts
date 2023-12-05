export interface DeviceSelections {
    androidSelection: string;
    iosSelection: string;
    iosVersion: string;
    androidVersion: string;
    location: Location;
    networkLogs: boolean;
}

export interface Location {
    name: string;
    city: string;
    code2: string;
    code3: string;
    latlng: number[];
    flag: string;
}

export interface GlobalLocation {
    defaultCode?: string;
    locations?: Location[];
    filterCodes?: string[];
    googleMapsApiKey?: string;
}
