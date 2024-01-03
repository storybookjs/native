import { GlobalLocation } from "@storybook/native-types";
import locationsArray from "./locations.json";

export const getDefaultLocationCode = () => {
    return "US";
};

export const getLocations = () => {
    return locationsArray;
};

export const getLocationsCodes = () => {
    return getLocations().map((e) => {
        return e.code2;
    });
};

export const getDefaultLocation = (code?: string) => {
    return getLocations().filter((e) => {
        return e.code2 === (code ?? getDefaultLocationCode());
    })[0];
};

export const getFilteredLocations = (onlyCodes2: string[]) => {
    const filteredList = getLocations().filter((e) => {
        return onlyCodes2.includes(e.code2);
    });
    return filteredList.sort(
        (a, b) => onlyCodes2.indexOf(a.code2) - onlyCodes2.indexOf(b.code2)
    );
};

export const getGlobalLocationJson = (
    globalLocation: GlobalLocation
): string => {
    return JSON.stringify(globalLocation);
};
