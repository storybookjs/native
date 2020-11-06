import { getAppetizeIframe } from "./iframeUtils";
import { Message } from "./types";

interface IncomingMessage {
  data: string;
}

let lastMessage: Message | null = null;
let connected = false;

const messageEventHandler = (event: IncomingMessage) => {
  if (event.data == "firstFrameReceived") {
    connected = true;
    if (lastMessage) {
      sendMessage(lastMessage);
      lastMessage = null;
    }
  } else if (event.data == "sessionEnded") {
    connected = false;
  }
};

export const sendMessage = (message: Message, requireConnection?: boolean) => {
  const appetizeFrame = getAppetizeIframe();
  if (!appetizeFrame || !appetizeFrame.contentWindow || (!connected && requireConnection)) {
    lastMessage = message;
    return;
  }

  appetizeFrame.contentWindow.postMessage(message, "*");
};

window.addEventListener("message", messageEventHandler, false);
