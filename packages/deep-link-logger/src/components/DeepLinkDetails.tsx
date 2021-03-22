import React from "react";
import { Button } from "@storybook/components";
import copy from "copy-to-clipboard";

export interface DeepLinkDetailsProps {
    link: string;
}

export default ({ link }: DeepLinkDetailsProps) => {
    const onCopyClicked = () => {
        copy(link);
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <Button style={{ minWidth: "60px" }} onClick={onCopyClicked}>
                    Copy
                </Button>
                <div style={{ marginLeft: "16px" }}>{link}</div>
            </div>
            <hr />
        </>
    );
};
