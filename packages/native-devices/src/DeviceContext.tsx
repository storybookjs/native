import * as React from 'react';
import { State } from './types';
import { getDefaultDevice } from './getDevices';

export const DeviceContext = React.createContext<State>({
  androidSelection: getDefaultDevice("android"),
  iosSelection: getDefaultDevice("ios")
});
