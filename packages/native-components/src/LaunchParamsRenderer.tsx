import React from "react";
import { getAppetizeUrl } from "@storybook/appetize-utils";
import { getDeviceForPlatform } from "./deviceUtil";

export default (props: RendererProps) => {
  const { apiKey, platform, knobs, storyParams } = props;
  const device = getDeviceForPlatform(platform);
  const storyParamsWithKnobs = { ...storyParams, ...knobs };

  const baseParams = knobs || {};
  const appetizeParams = { ...baseParams, device };
  const url = getAppetizeUrl(storyParamsWithKnobs, appetizeParams, apiKey);
  return (
    <iframe
      title="appetize-embed"
      src={url}
      width="1400px" 
      height="888px"
      id="appetize-iframe" />
  );
};
