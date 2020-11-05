export const getDeviceForPlatform = (platform: Platform): string => {
  // TODO: context
  if (platform === 'android') {
    return 'nexus5';
  }

  return 'iphone9';
};
