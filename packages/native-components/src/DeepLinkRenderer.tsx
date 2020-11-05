import React from "react";
import { getAppetizeUrl, openDeepLink } from "@storybook/appetize-utils";
import { getDeviceForPlatform } from "./deviceUtil";

export default (props: RendererProps) => {
  const { apiKey, platform, knobs, storyParams, deepLinkBaseUrl } = props;
  if (!deepLinkBaseUrl) {
    throw new Error('No deep link base url was specified');
  }

  const device = getDeviceForPlatform(platform);
  const storyParamsWithKnobs = { ...storyParams, ...knobs };

  React.useEffect(() => {
    const appetizeUrl = getAppetizeUrl({}, {
      device
    }, apiKey);

    openDeepLink(appetizeUrl, deepLinkBaseUrl, storyParamsWithKnobs);
  }, []);

  return <div />;
};
