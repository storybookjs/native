import React, {useEffect} from "react";
import DeepLinkRenderer from "./DeepLinkRenderer";
import LaunchParamsRenderer from "./LaunchParamsRenderer";
import { RendererProps } from "../types";
import {Provider} from "react-redux";
import {store, useAppDispatch} from "@storybook/native-controllers";
import {addons} from "@storybook/addons";
import {EmulatorEvents} from "@storybook/native-types";
import {addNetworkLog, resetNetworkLogs} from "@storybook/native-controllers/dist/state/networkLogsSlice";


const WithStore = (props: RendererProps): React.ReactElement => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        window.appetize
            .getClient("#appetize-iframe")
            .then((client: Client) => {
                addons.getChannel().emit(EmulatorEvents.onClient, client);

                client.on("session", (session: Session) => {
                    resetNetworkLogs(dispatch)
                    addons.getChannel().emit(EmulatorEvents.onRestNetworkLogs);

                    session.on("network", (log: Record<string, any>) => {
                        addons.getChannel().emit(EmulatorEvents.onNetworkLog, log);
                        addNetworkLog(dispatch, log)
                    })
                    session.on("log", (log: Log) => {
                        addons.getChannel().emit(EmulatorEvents.onLog, log);
                    })

                    addons.getChannel().emit(EmulatorEvents.onSession, session);
                })
            });
    });

    return (
        <>
            {props.deepLinkBaseUrl && <DeepLinkRenderer {...props} />}
            {!props.deepLinkBaseUrl && <LaunchParamsRenderer {...props} />}
        </>
    );
}


export default (props: RendererProps): React.ReactElement => {
    return (
        <Provider store={store}>
            <WithStore {...props} />
        </Provider>
    );
};
