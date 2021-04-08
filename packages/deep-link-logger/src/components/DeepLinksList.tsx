import React from "react";
import { styled } from "@storybook/theming";
import { ActionBar, ScrollArea } from "@storybook/components";
import copy from "copy-to-clipboard";

import DeepLinkDetails from "./DeepLinkDetails";

const Wrapper = styled(({ children }) => (
    <ScrollArea vertical>{children}</ScrollArea>
))({
    margin: 0,
    padding: "10px 5px 20px"
});

export interface DeepLinksRendererProps {
    links: string[];
    onClear: () => void;
}

export default ({ links, onClear }: DeepLinksRendererProps) => {
    const onCopyClicked = () => {
        copy(JSON.stringify(links));
    };

    return (
        <>
            <Wrapper title="linksLogger">
                {links.map((link: string) => (
                    <DeepLinkDetails key={link} link={link} />
                ))}
            </Wrapper>
            <ActionBar
                actionItems={[
                    {
                        title: "Copy All",
                        onClick: onCopyClicked
                    },
                    {
                        title: "Clear",
                        onClick: onClear
                    }
                ]}
            />
        </>
    );
};
