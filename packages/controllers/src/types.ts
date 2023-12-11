export interface MessageWithParam {
    type: string;
    value: string;
}

export type Message = string | MessageWithParam;

export interface OpenDeepLinkOptions {
    deepLinkBaseUrl: string;
    storyParams: Record<string, any>;
}

export interface SendMessageOptions {
    message: Message;
    requireConnection?: boolean;
    latLng?: number[];
    applicationId?: string;
    session?: Session;
}

export interface HandledMessageResponse {
    message: Record<string, any>;
    response: string;
    successful: boolean;
}

export interface NetworkLog {
    id: string;
    method: string;
    status: string;
    url: string;
    type: string;
    size: string;
    time: string;
    requestHeaders: { name: string; value: string }[];
    responseHeaders: { name: string; value: string }[];
    content: string;
}

export interface ReduxState {
    loading: boolean;
    commands: HandledMessageResponse[];

    networkLogs: NetworkLog[];
    networkLogsFilterKeyword?: string;
    filteredNetworkLogs?: NetworkLog[];

    logs: Log[];
    logsFilterKeyword?: string;
    filteredLogs?: Log[];
}
