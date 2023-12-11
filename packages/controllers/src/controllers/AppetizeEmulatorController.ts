/* eslint-disable class-methods-use-this */
import type { EmulatorContext, EmulatorConfig } from "@storybook/native-types";
import { debounce } from "lodash";
import { toast } from "react-toastify";
import { logDeepLink } from "@storybook/deep-link-logger";

import { EmulatorActions } from "@storybook/native-types";
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

    private fireBaseDebugViewEnabled = false;

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

    public sendMessage({
        message,
        requireConnection,
        latLng,
        applicationId,
        session
    }: SendMessageOptions) {
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

        const handleMissingApplicationId = () => {
            if (!applicationId || applicationId === "") {
                toast.error(`applicationId is not set!`, {
                    position: "bottom-center",
                    autoClose: 1500
                });
                return true;
            }
            return false;
        };

        switch (message) {
            case EmulatorActions.stopApp:
                if (handleMissingApplicationId()) return;

                appetizeFrame.contentWindow.postMessage(
                    {
                        type: "adbShellCommand",
                        value: `am force-stop ${applicationId}`
                    },
                    "*"
                );
                toast.success(`Stopped app ${applicationId} (Android only)`, {
                    position: "bottom-center",
                    autoClose: 1500
                });
                break;

            case EmulatorActions.overviewApps:
                if (session?.app?.platform === "android") {
                    session?.keypress("ANDROID_KEYCODE_MENU");
                } else {
                    session?.swipe({
                        position: { x: "50%", y: "99%" },
                        gesture: (g: { to: (x: string, y: string) => any }) =>
                            g.to("0%", "-15%")
                    });
                }

                break;

            case EmulatorActions.toggleFirebaseDebugView:
                if (handleMissingApplicationId()) return;

                this.fireBaseDebugViewEnabled = !this.fireBaseDebugViewEnabled;
                appetizeFrame.contentWindow.postMessage(
                    {
                        type: "adbShellCommand",
                        value: `setprop debug.firebase.analytics.app ${
                            this.fireBaseDebugViewEnabled
                                ? applicationId
                                : ".none."
                        }`
                    },
                    "*"
                );
                toast.success(
                    `${
                        this.fireBaseDebugViewEnabled ? "Enabled" : "Disabled"
                    } firebase  debug view! (Android only) for app ${applicationId}`,
                    {
                        position: "bottom-center",
                        autoClose: 1500
                    }
                );
                break;

            case EmulatorActions.location:
                appetizeFrame.contentWindow.postMessage(
                    {
                        type: EmulatorActions.location,
                        value: latLng
                    },
                    "*"
                );
                break;
            default:
                appetizeFrame.contentWindow.postMessage(message, "*");
                break;
        }
    }

    public createEmulator() {
        createAppetizeIframe(this.emulatorContext);
        window.addEventListener("message", this.handleIncomingMessage, false);
    }

    private undebouncedOpenDeepLink(deepLinkUrl: string) {
        logDeepLink(deepLinkUrl);
        this.sendMessage({
            message: { type: "url", value: deepLinkUrl },
            requireConnection: true
        });
    }

    public openDeepLink = debounce((deepLinkUrl: string) => {
        this.undebouncedOpenDeepLink(deepLinkUrl);
    }, 400);

    public getContext() {
        return this.emulatorContext;
    }

    public updateConfig(config: EmulatorConfig) {
        this.config = config;

        const appetizeUrl = getAppetizeUrl(config);
        updateIframeUrl(appetizeUrl, this.emulatorContext);
    }
}
