import React from "react";
import { styled } from "@storybook/theming";
import { ActionBar, ScrollArea } from "@storybook/components";
import copy from "copy-to-clipboard";

import DeepLinkDetails from "./DeepLinkDetails";

const Wrapper = styled(({children}: any) => (
    <ScrollArea vertical>{children}</ScrollArea>
))({
    margin: 0,
    padding: "10px 5px 20px"
});

export interface DeepLinksListProps {
    links: string[];
    onClear: () => void;
}

export default ({ links, onClear }: DeepLinksListProps) => {
    const onCopyClicked = () => {
        copy(JSON.stringify(links));
    };

    return (
        <>
            <Wrapper title="linksLogger">
                {links.map((link, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <DeepLinkDetails key={`${link}-${index}`} link={link} />
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
