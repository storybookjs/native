import React from "react";
import { connect } from "react-redux";
import {
    ReduxState,
    filterNetWorkLogs,
    resetNetworkLogs,
    useAppDispatch
} from "@storybook/native-controllers";
import NetworkLogDetails from "./NetworkLogDetails";

const mapStateToProps = (state: ReduxState, props: NetWorkLogsListProps) => {
    return { state, props };
};

export interface NetWorkLogsListProps {
    state?: ReduxState;
    onDisableNetwork: () => void;
}

const NetworkLogsList = ({ state, onDisableNetwork }: NetWorkLogsListProps) => {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        resetNetworkLogs(dispatch);
    }, [dispatch]);

    const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        filterNetWorkLogs(dispatch, event.target?.value ?? "");
    };

    const clearLogs = () => {
        resetNetworkLogs(dispatch);
    };

    return (
        <div style={{ margin: "4px" }}>
            <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                <input
                    placeholder="Filter"
                    onChange={onFilterChange}
                    style={{
                        padding: "5px",
                        width: "250px",
                        borderRadius: "3rem",
                        borderWidth: "0.2px",
                        borderColor: "#f8ffff",
                        backgroundColor: "#f8f8f8",
                        height: "2rem"
                    }}
                />
                <span>
                    <button
                        type="button"
                        onClick={clearLogs}
                        style={{
                            marginLeft: "20px",
                            backgroundColor: "#65e5a6",
                            fill: "#090909",
                            color: "#090909",
                            borderRadius: "1rem",
                            borderWidth: "0px",
                            padding: "5px",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                            fontSize: "13px"
                        }}
                    >
                        Clear
                    </button>
                </span>
                <span>
                    <button
                        type="button"
                        onClick={onDisableNetwork}
                        style={{
                            marginLeft: "20px",
                            backgroundColor: "#65e5a6",
                            fill: "#090909",
                            color: "#090909",
                            borderRadius: "1rem",
                            borderWidth: "0px",
                            padding: "5px",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                            fontSize: "13px"
                        }}
                    >
                        Disable
                    </button>
                </span>
            </div>
            <div style={{ fontWeight: "bold", fontSize: "12px" }}>
                <span style={{ marginLeft: "2px" }}>METHOD</span>
                <span style={{ marginLeft: "6px" }}>STATUS</span>
                <span style={{ marginLeft: "10px" }}>URL</span>
                <span style={{ marginLeft: "185px" }}>TYPE</span>
                <span style={{ marginLeft: "87px" }}>SIZE</span>
                <span style={{ marginLeft: "9px" }}>TIME</span>
            </div>
            {(state?.filteredNetworkLogs ?? state?.networkLogs ?? []).map(
                (log) => {
                    return <NetworkLogDetails key={log.id} log={log} />;
                }
            )}
        </div>
    );
};
export default connect(mapStateToProps)(NetworkLogsList);
