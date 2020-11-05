import React from "react";
import { DeviceContext } from "./DeviceContext";
import { State } from "./types";

export const DeviceWrapper = ({
  children,
  ...value
}: React.PropsWithChildren<State>) => {
  const wrappedDevices = React.useContext(DeviceContext);

  return (
    <DeviceContext.Provider value={{ ...wrappedDevices, ...value }}>
      {children}
    </DeviceContext.Provider>
  );
};
