import React from "react";
import type { HandledMessageResponse } from "@storybook/native-controllers";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

export interface CommandDetailsProps {
    command: HandledMessageResponse;
}

export default ({ command }: CommandDetailsProps) => {
    if (command.successful) {
        return <SuccessMessage>{command.response}</SuccessMessage>;
    }

    return <ErrorMessage>{command.response}</ErrorMessage>;
};
