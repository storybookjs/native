import React from 'react';
import { addons, types } from '@storybook/addons';
import { Icons, IconButton } from '@storybook/components';

const ADDON_ID = 'native';

const sendMessage = (message: string) => {
    const storybookFrame = document.getElementById('storybook-preview-iframe') as HTMLIFrameElement;
    const innerDoc = storybookFrame.contentDocument || storybookFrame.contentWindow?.document;
    if (!innerDoc) {
      throw new Error('The storybook content frame was not loaded');
    }

    const appetizeFrame = innerDoc.getElementById('appetize-iframe') as HTMLIFrameElement;
    if (!appetizeFrame || !appetizeFrame.contentWindow) {
      throw new Error('The appetize.io content frame was not loaded');
    }

    appetizeFrame.contentWindow.postMessage(message, '*');
};

const rotateLeft = () => {
    sendMessage('rotateLeft');
};

const rotateRight = () => {
    sendMessage('rotateRight');
};

const captureScreenshot = () => {
    sendMessage('saveScreenshot');
};

// TODO: deep linking
//sendMessage({type: 'url', value: 'https://intuit.com'});

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
});
