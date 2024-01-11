import React from "react";
import { connect } from "react-redux";
import {
    ReduxState,
    filterLogs,
    resetLogs,
    useAppDispatch
} from "@storybook/native-controllers";
import LogDetails from "./LogDetails";

const mapStateToProps = (state: ReduxState, props: LogsListProps) => {
    return { state, props };
};

export interface LogsListProps {
    state?: ReduxState;
    onDisableLogs: () => void;
}

const LogsList = ({ state, onDisableLogs }: LogsListProps) => {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        resetLogs(dispatch);
    }, [dispatch]);

    const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        filterLogs(dispatch, event.target?.value ?? "");
    };

    const clearLogs = () => {
        resetLogs(dispatch);
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
                        onClick={onDisableLogs}
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
            {(state?.filteredLogs ?? state?.logs ?? []).map((log) => {
                return <LogDetails log={log} />;
            })}
        </div>
    );
};
export default connect(mapStateToProps)(LogsList);
