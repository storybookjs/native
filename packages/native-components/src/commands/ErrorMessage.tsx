import React from "react";
import BaseMessage from "./BaseMessage";

export interface ErrorMessageProps {
    children?: React.ReactNode;
}

export default ({ children }: ErrorMessageProps) => {
    return <BaseMessage backgroundColor="red">{children}</BaseMessage>;
};
