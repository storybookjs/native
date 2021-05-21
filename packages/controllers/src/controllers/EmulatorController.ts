import type { EmulatorContext, EmulatorConfig } from "@storybook/native-types";
import type { SendMessageOptions } from "../types";

export default interface EmulatorController {
    sendMessage(options: SendMessageOptions): void;

    createEmulator(): void;

    openDeepLink(deepLinkUrl: string): void;

    getContext(): EmulatorContext | undefined;

    updateConfig(config: EmulatorConfig): void;
}
