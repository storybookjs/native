import React from "react";
import type { HandledMessageResponse } from "@storybook/native-controllers";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

export interface CommandDetailsProps {
    command: HandledMessageResponse;
}

export default ({ command }: CommandDetailsProps) => {
    const { successful, response, message } = command;
    let textToRender = response;
    if (!textToRender) {
        textToRender = `Sent data to app: ${JSON.stringify(message, null, 2)}`;
    }

    if (successful) {
        return <SuccessMessage>{textToRender}</SuccessMessage>;
    }

    return <ErrorMessage>{textToRender}</ErrorMessage>;
};
