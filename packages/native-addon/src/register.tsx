import React from 'react';
import { addons, types } from '@storybook/addons';
import { Icons, IconButton } from '@storybook/components';
import { sendMessage } from '@storybook/appetize-utils';
import { ADDON_ID } from './constants';
import { DeviceSelectorTool } from './devicePicker';

const rotateLeft = () => {
    sendMessage('rotateLeft');
};

const rotateRight = () => {
    sendMessage('rotateRight');
};

const captureScreenshot = () => {
    sendMessage('saveScreenshot');
};

addons.register(ADDON_ID, () => {
  addons.add(`${ADDON_ID}/rotateLeft`, {
    type: types.TOOL,
    title: 'Rotate left',
    render: () => (
      <IconButton title="Rotate left" onClick={rotateLeft}>
        <Icons icon="arrowleft" />
      </IconButton>
    )
  });

  addons.add(`${ADDON_ID}/rotateRight`, {
    type: types.TOOL,
    title: 'Rotate right',
    render: () => (
      <IconButton title="Rotate right" onClick={rotateRight}>
        <Icons icon="arrowright" />
      </IconButton>
    )
  });

  addons.add(`${ADDON_ID}/captureScreenshot`, {
    type: types.TOOL,
    title: 'Capture screenshot',
    render: () => (
      <IconButton title="Capture screenshot" onClick={captureScreenshot}>
        <Icons icon="camera" />
      </IconButton>
    )
  });

  addons.add(`${ADDON_ID}/devicePicker`, {
    type: types.TOOL,
    title: 'Select device',
    render: () => <DeviceSelectorTool />
  });
});
