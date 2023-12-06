import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { addons } from "@storybook/addons";
import { EmulatorEvents } from "@storybook/native-types";
import {
    store,
    addLog,
    addNetworkLog,
    resetNetworkLogs,
    useAppDispatch
} from "@storybook/native-controllers";
import { useLogs, useNetworkLogs } from "@storybook/native-devices";
import { RendererProps } from "../types";
import LaunchParamsRenderer from "./LaunchParamsRenderer";
import DeepLinkRenderer from "./DeepLinkRenderer";

const WithStore = (props: RendererProps): React.ReactElement => {
    const dispatch = useAppDispatch();
    const networkLogs = useNetworkLogs();
    const logs = useLogs();

    useEffect(() => {
        if (!window.appetize) {
            addons.getChannel().emit(EmulatorEvents.onMissingClient, null);
            return;
        }
        if (!networkLogs && !logs) return;
        window.appetize.getClient("#appetize-iframe").then((client: Client) => {
            addons.getChannel().emit(EmulatorEvents.onClient, client);

            client.on("session", (session: Session) => {
                resetNetworkLogs(dispatch);
                addons.getChannel().emit(EmulatorEvents.onRestNetworkLogs);

                if (networkLogs) {
                    session.on("network", (log: Record<string, any>) => {
                        addons
                            .getChannel()
                            .emit(EmulatorEvents.onNetworkLog, log);
                        addNetworkLog(dispatch, log);
                    });
                }

                if (logs) {
                    session.on("log", (log: Log) => {
                        addons.getChannel().emit(EmulatorEvents.onLog, log);
                        addLog(dispatch, log);
                    });
                }

                addons.getChannel().emit(EmulatorEvents.onSession, session);
            });
        });
    }, [networkLogs, logs]);

    return (
        <>
            {props.deepLinkBaseUrl && <DeepLinkRenderer {...props} />}
            {!props.deepLinkBaseUrl && <LaunchParamsRenderer {...props} />}
        </>
    );
};

export default (props: RendererProps): React.ReactElement => {
    return (
        <Provider store={store}>
            <WithStore {...props} />
        </Provider>
    );
};
