import React from "react";
import DeepLinkRenderer from "./DeepLinkRenderer";
import LaunchParamsRenderer from "./LaunchParamsRenderer";
import { RendererProps } from "../types";

export default (props: RendererProps): React.ReactElement => {
    if (props.deepLinkBaseUrl) {
        return <DeepLinkRenderer {...props} />;
    }

    return <LaunchParamsRenderer {...props} />;
};
