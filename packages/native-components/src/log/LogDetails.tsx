import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@storybook/components";

export interface LogDetailsProps {
    log: Log;
}

const LogDetails = ({ log }: LogDetailsProps) => {
    const [open, setOpen] = React.useState(false);
    return (
        <div style={{ padding: "5px", marginTop: "4px" }}>
            <div style={{ display: "table" }}>
                <IconButton onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} />
                </IconButton>
                <span
                    style={{
                        marginLeft: "5px",
                        width: "350px",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        textAlign: "start",
                        fontWeight: "bold",
                        textOverflow: "ellipsis",
                        verticalAlign: "middle",
                        overflow: "hidden"
                    }}
                >
                    {log.message}
                </span>
            </div>

            {open && (
                <div style={{ padding: "5px 5px 5px 13px" }}>
                    <p>{log.message}</p>
                </div>
            )}
        </div>
    );
};

export default LogDetails;
