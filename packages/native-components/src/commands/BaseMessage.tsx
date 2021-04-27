import React from "react";

export interface MessageProps {
    children?: React.ReactNode;
    backgroundColor: string;
}

export default ({ children, backgroundColor }: MessageProps) => {
    return (
        <div
            style={{
                padding: "8px",
                margin: "8px 0",
                borderRadius: "8px",
                border: `1px solid ${backgroundColor}`,
                width: "fit-content"
            }}
        >
            {children}
        </div>
    );
};
