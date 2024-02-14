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

const appetizeSessionMap = new Map<string, Session>();

const WithStore = (props: DeepLinkRendererProps): React.ReactElement => {
    const dispatch = useAppDispatch();
    const networkLogs = useNetworkLogs();
    const logs = useLogs();

    const [session, setSession] = React.useState<Session>();

    const sessionKey = props.context ?? props.platform;
    useEffect(() => {
        if (!window.appetize) {
            addons.getChannel().emit(EmulatorEvents.onMissingClient, null);
            return;
        }

        if (sessionKey && appetizeSessionMap.has(sessionKey)) {
            setSession(appetizeSessionMap.get(sessionKey));
            resetNetworkLogs(dispatch);
            addons.getChannel().emit(EmulatorEvents.onRestNetworkLogs);
            return;
        }

        const frameId = `#appetize-iframe${
            props.context ? `-${props.context}` : ""
        }`;
        window.appetize.getClient(frameId).then((client: Client) => {
            addons.getChannel().emit(EmulatorEvents.onClient, client);

            client.on("error", (error: string) => {
                console.error(error);
                appetizeSessionMap.delete(sessionKey);
            });

            client.on("session", (newSession: Session) => {
                if (sessionKey) appetizeSessionMap.set(sessionKey, newSession);
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
