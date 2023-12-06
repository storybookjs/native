import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { addons } from "@storybook/addons";
import { EmulatorEvents } from "@storybook/native-types";
import {
    store,
    addNetworkLog,
    resetNetworkLogs,
    useAppDispatch
} from "@storybook/native-controllers";
import { useNetworkLogs } from "@storybook/native-devices";
import { RendererProps } from "../types";
import LaunchParamsRenderer from "./LaunchParamsRenderer";
import DeepLinkRenderer from "./DeepLinkRenderer";

const WithStore = (props: RendererProps): React.ReactElement => {
    const dispatch = useAppDispatch();
    const networkLogs = useNetworkLogs();

    useEffect(() => {
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

                // session.on("log", (log: Log) => {
                //     addons.getChannel().emit(EmulatorEvents.onLog, log);
                // });

                addons.getChannel().emit(EmulatorEvents.onSession, session);
            });
        });
    });

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
