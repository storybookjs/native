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
import { DeepLinkRendererProps } from "../types";
import LaunchParamsRenderer from "./LaunchParamsRenderer";
import DeepLinkRenderer from "./DeepLinkRenderer";

const WithStore = (props: DeepLinkRendererProps): React.ReactElement => {
    const dispatch = useAppDispatch();
    const networkLogs = useNetworkLogs();
    const logs = useLogs();

    const [session, setSession] = React.useState<Session>();

    useEffect(() => {
        if (!window.appetize) {
            addons.getChannel().emit(EmulatorEvents.onMissingClient, null);
            return;
        }
        window.appetize
            .getClient(
                `#appetize-iframe${props.context ? `-${props.context}` : ""}`
            )
            .then((client: Client) => {
                addons.getChannel().emit(EmulatorEvents.onClient, client);

                client.on("session", (newSession: Session) => {
                    setSession(newSession);
                    resetNetworkLogs(dispatch);
                    addons.getChannel().emit(EmulatorEvents.onRestNetworkLogs);
                    if (networkLogs) {
                        newSession.on("network", (log: Record<string, any>) => {
                            addons
                                .getChannel()
                                .emit(EmulatorEvents.onNetworkLog, log);
                            addNetworkLog(dispatch, log);
                        });
                    }

                    if (logs) {
                        newSession.on("log", (log: Log) => {
                            addons.getChannel().emit(EmulatorEvents.onLog, log);
                            addLog(dispatch, log);
                        });
                    }

                    addons.getChannel().emit(EmulatorEvents.onSession, session);
                });
            });
    }, [networkLogs, logs, props.context]);

    return (
        <>
            {props.deepLinkBaseUrl && (
                <DeepLinkRenderer {...props} session={session} />
            )}
            {!props.deepLinkBaseUrl && <LaunchParamsRenderer {...props} />}
        </>
    );
};

export default (props: DeepLinkRendererProps): React.ReactElement => {
    return (
        <Provider store={store}>
            <WithStore {...props} />
        </Provider>
    );
};
