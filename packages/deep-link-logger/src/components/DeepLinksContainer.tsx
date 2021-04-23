import React from "react";
import { API } from "@storybook/api";
import { AddonPanel } from "@storybook/components";

import { DEEP_LINKS_EVENT_ID } from "../constants";
import DeepLinksList from "./DeepLinksList";

export interface DeepLinksContainerProps {
    api: API;
    active?: boolean;
}

export default ({ api, active }: DeepLinksContainerProps) => {
    const [links, setLinks] = React.useState<string[]>([]);

    const clearUrls = () => {
        setLinks([]);
    };

    const addUrl = (url: string) => {
        setLinks((allLinks) => {
            return [...allLinks, url];
        });
    };

    React.useEffect(() => {
        api.on(DEEP_LINKS_EVENT_ID, addUrl);

        return () => {
            api.off(DEEP_LINKS_EVENT_ID, addUrl);
        };
    }, []);

    return (
        <AddonPanel key="deep-links-panel" active={Boolean(active)}>
            <DeepLinksList links={links} onClear={clearUrls} />
        </AddonPanel>
    );
};
