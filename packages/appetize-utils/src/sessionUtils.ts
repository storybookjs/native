import { getAppetizeIframe } from "./iframeUtils";
import { Message } from "./types";

interface IncomingMessage {
    data: string;
}

let lastUrlMessage: Message | null = null;
let connected = false;

export const sendMessage = (message: Message, requireConnection?: boolean) => {
    const appetizeFrame = getAppetizeIframe();
    if (typeof message === "object" && message.type === "url") {
        lastUrlMessage = message;
    }

    if (
        !appetizeFrame ||
        !appetizeFrame.contentWindow ||
        (!connected && requireConnection)
    ) {
        return;
    }

    appetizeFrame.contentWindow.postMessage(message, "*");
};

const messageEventHandler = (event: IncomingMessage) => {
    if (event.data === "firstFrameReceived") {
        connected = true;

        // small delay because appetize sometimes will not navigate immediately
        setTimeout(() => {
            if (lastUrlMessage) {
                sendMessage(lastUrlMessage);
            }
        }, 600);
    } else if (event.data === "sessionEnded") {
        connected = false;
    }
};

window.addEventListener("message", messageEventHandler, false);
