import React from "react";
import { NetworkLog } from "@storybook/native-controllers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faCaretDown,
    faCaretUp
} from "@fortawesome/free-solid-svg-icons";

export interface NetworkLogDetailsProps {
    log: NetworkLog;
}

const NetworkLogDetails = ({ log }: NetworkLogDetailsProps) => {
    const [open, setOpen] = React.useState(false);
    return (
        <div style={{ padding: "5px", marginTop: "4px" }}>
            <div style={{ display: "table" }}>
                <span onClick={() => setOpen(!open)}><FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} /></span>
                <span style={{
                    marginLeft: "5px",
                    width: "35px",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    textAlign: "start",
                    fontWeight: "bold",
                    verticalAlign: "middle"
                }}
                >
                    {log.method}
                </span>
                <span
                    style={{
                        marginLeft: "5px",
                        width: "45px",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        verticalAlign: "middle"
                    }}
                >
                    {log.status}
                </span>
                <span style={{
                    marginLeft: "15px",
                    width: "200px",
                    display: "inline-block",
                    textAlign: "start",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    verticalAlign: "middle"
                }}
                >
                    {log.url}
                </span>
                <span style={{
                    marginLeft: "5px",
                    width: "100px",
                    display: "inline-block",
                    textAlign: "start",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    verticalAlign: "middle"
                }}
                >
                    {log.type}
                </span>
                <span style={{
                    marginLeft: "5px",
                    width: "40px",
                    display: "inline-block",
                    textAlign: "end",
                    verticalAlign: "middle"
                }}
                >
                    {log.size}
                </span>
                <span style={{
                    marginLeft: "5px",
                    width: "45px",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textAlign: "end",
                    verticalAlign: "middle"
                }}
                >
                    {log.time}
                </span>
            </div>

            {open && <div style={{padding: "5px 5px 5px 13px"}}>
                <h4 style={{fontWeight: "bold"}}>URL</h4>
                <p>{log.url}</p>
                <h4 style={{fontWeight: "bold"}}>Request Headers</h4>
                {log.requestHeaders.map((header) => {
                    return <p>{header.name}: {header.value}</p>
                })}
                <h4 style={{fontWeight: "bold"}}>Response Headers</h4>
                {log.responseHeaders.map((header) => {
                    return <p>{header.name}: {header.value}</p>
                })}
                <h4 style={{fontWeight: "bold"}}>Content</h4>
                {log.content ?? "no content"}
            </div>}
        </div>
    );
};

export default NetworkLogDetails;
