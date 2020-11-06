import React from "react";
import { DeviceContext } from "./DeviceContext";
import { DeviceSelections } from "./types";

export const DeviceWrapper = ({
  children,
  ...value
}: React.PropsWithChildren<DeviceSelections>) => {
  const context = React.useContext(DeviceContext);

  return (
    <DeviceContext.Provider value={{ ...context, ...value }}>
      {children}
    </DeviceContext.Provider>
  );
};
