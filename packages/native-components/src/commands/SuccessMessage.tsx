import React from "react";
import BaseMessage from "./BaseMessage";

export interface SuccessMessageProps {
    children?: React.ReactNode;
}

export default ({ children }: SuccessMessageProps) => {
    return <BaseMessage backgroundColor="green">{children}</BaseMessage>;
};
