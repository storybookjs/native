import React from "react";
import { getAppetizeUrl } from "@storybook/appetize-utils";
import { useDevice } from "@storybook/native-devices";
import { RendererProps } from "./types";

export default (props: RendererProps): React.ReactElement => {
  const { apiKey, platform, knobs, storyParams } = props;

  const device = useDevice(platform);
  const storyParamsWithKnobs = { ...storyParams, ...knobs };
  const baseParams = knobs || {};
  const appetizeParams = { ...baseParams, device };

  const url = getAppetizeUrl(storyParamsWithKnobs, appetizeParams, apiKey);
  return (
    <iframe
      title="appetize-embed"
      src={url}
      style={{border: '0'}}
      width="1400px" 
      height="888px"
      id="appetize-iframe" />
  );
};
