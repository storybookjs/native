import type { EmulatorContext } from "@storybook/native-types";
import type { EmulatorConfig, SendMessageOptions } from "../types";

export default interface EmulatorController {
    sendMessage(options: SendMessageOptions): Promise<void>;

    createEmulator(): void;

    destroyEmulator(): void;

    openDeepLink(deepLinkUrl: string): Promise<void>;

    getContext(): EmulatorContext | undefined;

    updateConfig(config: EmulatorConfig): void;
}
