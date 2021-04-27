import type { EmulatorConfig } from "@storybook/native-types";

export const getAppetizeUrl = ({
    launchArgs,
    settings,
    apiKey
}: EmulatorConfig) => {
    if (!apiKey) {
        throw new Error("No appetize API key was specified");
    }

    const options: Record<string, any> = {
        xdocMsg: true,
        autoplay: true,
        ...settings
    };
    if (launchArgs) {
        options.params = JSON.stringify(launchArgs);
    }

    const urlWithoutParams = `https://appetize.io/embed/${apiKey}`;
    // @ts-ignore
    const qsParams = new URLSearchParams(options).toString();

    return `${urlWithoutParams}?${qsParams}`;
};
