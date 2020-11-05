import React from "react";
import DeepLinkRenderer from "./DeepLinkRenderer";
import LaunchParamsRenderer from "./LaunchParamsRenderer";

export default (props: RendererProps) => {
  if (props.deepLinkBaseUrl) {
    return <DeepLinkRenderer {...props} />;
  }
  
  return <LaunchParamsRenderer {...props} />;
};
