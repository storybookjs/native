import React from "react";
import type {ReduxState} from "@storybook/native-controllers";
import {EmulatorContext} from "@storybook/native-types";

import NetworkLogDetails from "./NetworkLogDetails";
import {connect} from "react-redux";
import {useAppDispatch} from "@storybook/native-controllers";
import {
    filterNetWorkLogs,
    resetNetworkLogs
} from "@storybook/native-controllers/dist/state/networkLogsSlice";

const mapStateToProps = (state: NetWorkLogsListProps) => {
    return {...state};
};

export interface NetWorkLogsListProps extends ReduxState {
    context?: EmulatorContext;
}

const NetworkLogsList = ({networkLogs, filteredNetworkLogs, context}: NetWorkLogsListProps) => {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        resetNetworkLogs(dispatch);
    }, [context, dispatch]);

    const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        filterNetWorkLogs(dispatch, event.target?.value ?? "")
    };

    return (
        <div style={{margin: "4px"}}>
            <div style={{marginTop: "5px", marginBottom: "5px"}}>
                <input
                    placeholder={"Filter"}
                    onChange={onFilterChange}
                    style={{
                        padding: "5px",
                        width: "200px",
                        borderRadius: "3rem",
                        borderWidth: "0.2px",
                        borderColor: "#f8ffff",
                        backgroundColor: "#f8f8f8",
                        height: "2rem",
                    }}/>
            </div>
            <div style={{fontWeight: "bold", fontSize: "12px"}}>
                <span style={{marginLeft: "2px"}}>METHOD</span>
                <span style={{marginLeft: "6px"}}>STATUS</span>
                <span style={{marginLeft: "10px"}}>URL</span>
                <span style={{marginLeft: "185px"}}>TYPE</span>
                <span style={{marginLeft: "87px"}}>SIZE</span>
                <span style={{marginLeft: "9px"}}>TIME</span>
            </div>
            {(filteredNetworkLogs ?? networkLogs).map((log) => {
                return <NetworkLogDetails log={log}/>;
            })}
        </div>
    );
};
export default connect(mapStateToProps)(NetworkLogsList);
