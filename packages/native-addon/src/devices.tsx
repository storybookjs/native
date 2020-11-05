export const getDevices = (platform: 'ios' | 'android'): string[] => {
  if (platform === 'android') {
      return ['nexus5', 'nexus7', 'nexus9'];
  } else if (platform === 'ios') {
      return ['ipadair', 'iphone6s', 'iphone6splus', 'ipadair2', 'iphone9'];
  }
  throw new Error(`No devices for platform: ${platform}`);
};
