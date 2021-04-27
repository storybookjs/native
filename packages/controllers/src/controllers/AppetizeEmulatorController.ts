/* eslint-disable class-methods-use-this */
import type { EmulatorContext, EmulatorConfig } from "@storybook/native-types";

import EmulatorController from "./EmulatorController";
import {
    createAppetizeIframe,
    getAppetizeIframe,
    updateIframeUrl
} from "../utils/iframeUtils";
import { Message, SendMessageOptions } from "../types";
import { getAppetizeUrl } from "../utils/getAppetizeUrl";

interface IncomingMessage {
    data: string;
}

export default class AppetizeEmulatorController implements EmulatorController {
    private lastUrlMessage: Message | undefined = undefined;

    private connected = false;

    private emulatorContext: EmulatorContext | undefined = undefined;

    private config: EmulatorConfig | undefined = undefined;

    constructor(context?: EmulatorContext) {
        this.emulatorContext = context;
    }

    private handleIncomingMessage = (event: IncomingMessage) => {
        if (event.data === "firstFrameReceived") {
            this.connected = true;

            // small delay because appetize sometimes will not navigate immediately
            setTimeout(() => {
                if (this.lastUrlMessage) {
                    this.sendMessage({
                        message: this.lastUrlMessage
                    });
                }
            }, 600);
        } else if (event.data === "sessionEnded") {
            this.connected = false;
        }
    };

    public sendMessage({ message, requireConnection }: SendMessageOptions) {
        const appetizeFrame = getAppetizeIframe(this.emulatorContext);
        if (typeof message === "object" && message.type === "url") {
            this.lastUrlMessage = message;
        }

        if (
            !appetizeFrame ||
            !appetizeFrame.contentWindow ||
            (!this.connected && requireConnection)
        ) {
            return;
        }

        appetizeFrame.contentWindow.postMessage(message, "*");
    }

    public createEmulator() {
        createAppetizeIframe(this.emulatorContext);
        window.addEventListener("message", this.handleIncomingMessage, false);
    }

    // TODO: implement this
    public destroyEmulator() {
        throw new Error("Method not implemented.");
    }

    public openDeepLink(deepLinkUrl: string) {
        this.sendMessage({
            message: { type: "url", value: deepLinkUrl },
            requireConnection: true
        });
    }

    public getContext() {
        return this.emulatorContext;
    }

    public updateConfig(config: EmulatorConfig) {
        this.config = config;

        const appetizeUrl = getAppetizeUrl(config);
        updateIframeUrl(appetizeUrl, this.emulatorContext);
    }
}
