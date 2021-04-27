import type { EmulatorContext } from "@storybook/native-types";
import { BASE_IFRAME_ID } from "../constants";

export const getInnerDocument = (): HTMLDocument => {
    const storybookFrame = document.getElementById(
        "storybook-preview-iframe"
    ) as HTMLIFrameElement;
    const innerDoc = storybookFrame
        ? storybookFrame.contentDocument ||
          storybookFrame.contentWindow?.document
        : document;
    if (!innerDoc) {
        throw new Error("The inner document was not found");
    }

    return innerDoc;
};

export const getAppetizeIframeId = (context?: EmulatorContext): string => {
    if (context) {
        return `${BASE_IFRAME_ID}-${context}`;
    }

    return BASE_IFRAME_ID;
};

export const createAppetizeIframe = (
    context?: EmulatorContext
): HTMLIFrameElement => {
    const innerDoc = getInnerDocument();
    const iframe = innerDoc.createElement("iframe");
    iframe.id = getAppetizeIframeId(context);
    iframe.style.border = "0";
    iframe.style.overflow = "hidden";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.src = "about:blank";
    iframe.title = "appetize-embed";
    iframe.scrolling = "no";
    innerDoc.body.appendChild(iframe);
    return iframe;
};

export const getAppetizeIframe = (
    context?: EmulatorContext
): HTMLIFrameElement => {
    const innerDoc = getInnerDocument();
    const iframeId = getAppetizeIframeId(context);
    const appetizeFrame = innerDoc.getElementById(
        iframeId
    ) as HTMLIFrameElement;
    if (!appetizeFrame) {
        throw new Error(
            `The appetize.io iframe was not found for context: ${context}`
        );
    }

    return appetizeFrame;
};

export const updateIframeUrl = (url: string, context?: EmulatorContext) => {
    const iframe = getAppetizeIframe(context);
    if (iframe && iframe.src !== url) {
        iframe.src = url;
    }
};
