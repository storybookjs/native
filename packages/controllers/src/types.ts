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
}

export interface HandledMessageResponse {
    message: Record<string, any>;
    response: string;
    successful: boolean;
}

export interface ReduxState {
    loading: boolean;
    commands: HandledMessageResponse[];
}
