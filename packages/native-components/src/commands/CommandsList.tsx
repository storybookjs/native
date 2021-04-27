import React from "react";
import { connect } from "react-redux";
import { useAppDispatch, resetCommands } from "@storybook/native-controllers";
import type { ReduxState } from "@storybook/native-controllers";
import { EmulatorContext } from "@storybook/native-types";
import { Loader } from "@storybook/components";

import CommandDetails from "./CommandDetails";

const mapStateToProps = (state: ReduxState) => {
    return { ...state };
};

export interface CommandsListProps extends ReduxState {
    context?: EmulatorContext;
}

const CommandsList = ({ loading, commands, context }: CommandsListProps) => {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        resetCommands(dispatch);
    }, [context, dispatch]);

    return (
        <div>
            {commands.map((command) => {
                return <CommandDetails command={command} />;
            })}

            {loading && <Loader />}
        </div>
    );
};

export default connect(mapStateToProps)(CommandsList);
