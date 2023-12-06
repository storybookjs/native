import React, { useState } from "react";
import { API, useAddonState } from "@storybook/api";
import { useGlobals } from "@storybook/manager-api";
import { AddonPanel } from "@storybook/components";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { DeviceSelections } from "@storybook/native-devices";
import { ACTION_EVENT_NAME } from "@storybook/native-controllers";
import { EmulatorActions, GlobalLocation } from "@storybook/native-types";
import { ADDON_ID } from "../constants";

export interface MapContainerProps {
    api: API;
    active?: boolean;
}

export default ({ api, active }: MapContainerProps) => {
    const [{ location }] = useGlobals();

    const globalLocation = JSON.parse(location ?? "{}") as GlobalLocation;
    if (
        !globalLocation.googleMapsApiKey ||
        globalLocation.googleMapsApiKey === ""
    ) {
        return (
            <AddonPanel key="map-panel" active={Boolean(active)}>
                <div style={{ margin: "20px" }}>
                    <h1>Google Maps API Key Missing!</h1>
                    <p>
                        To use Google Maps in your storybook, you need an API
                        key.
                    </p>
                    <p>
                        Follow the steps
                        <a
                            href="https://github.com/storybookjs/native/tree/master/packages/addon#google-map-api-key"
                            rel="noreferrer"
                            target="_blank"
                        >
                            {" "}
                            here
                            {" "}
                        </a>
                        to obtain your key.
                    </p>
                </div>
            </AddonPanel>
        );
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: globalLocation.googleMapsApiKey
    });

    const [map, setMap] = useState<google.maps.Map>();
    const [currentMarker, setCurrentMarker] = useState<google.maps.Marker>();

    const [state] = useAddonState<DeviceSelections>(ADDON_ID);

    const center = {
        lat: state.location?.latlng[0] ?? 18.52043,
        lng: state.location?.latlng[1] ?? 73.856743
    };

    React.useEffect(() => {
        currentMarker?.setPosition(center);
    }, [state]);

    const mapLoaded = (loadedMap: google.maps.Map) => {
        setMap(loadedMap);
        const marker = new google.maps.Marker();
        setCurrentMarker(marker);
        marker.setMap(loadedMap);
        marker.setPosition(center);
    };

    const clickMap = (event: google.maps.MapMouseEvent) => {
        if (event.latLng && map) {
            currentMarker?.setMap(map);
            currentMarker?.setPosition(event.latLng);
            api?.getChannel()?.emit(
                ACTION_EVENT_NAME,
                EmulatorActions.location,
                [event.latLng.lat(), event.latLng.lng()]
            );
        }
    };

    return (
        <AddonPanel key="map-panel" active={Boolean(active)}>
            <div className="Map" style={{ height: "100vh", width: "100vw" }}>
                {!isLoaded ? (
                    <h1>Loading...</h1>
                ) : (
                    <GoogleMap
                        mapContainerStyle={{
                            height: "100%",
                            width: "100%",
                            position: "absolute"
                        }}
                        mapContainerClassName="map-container"
                        center={center}
                        zoom={12}
                        onClick={clickMap}
                        onLoad={mapLoaded}
                    />
                )}
            </div>
        </AddonPanel>
    );
};
