import { APPETIZE_IFRAME_ID } from "./constants";

const getInnerDocument = (): HTMLDocument => {
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

export const createAppetizeIframe = (): HTMLIFrameElement => {
    const innerDoc = getInnerDocument();
    const iframe = innerDoc.createElement("iframe");
    iframe.id = APPETIZE_IFRAME_ID;
    iframe.style.border = "0";
    iframe.style.overflow = "hidden";
    iframe.style.width = "800px";
    iframe.style.height = "1400px";
    iframe.src = "about:blank";
    iframe.title = "appetize-embed";
    innerDoc.body.appendChild(iframe);
    return iframe;
};

export const getAppetizeIframe = (): HTMLIFrameElement | null => {
    const innerDoc = getInnerDocument();
    const appetizeFrame = innerDoc.getElementById(
        APPETIZE_IFRAME_ID
    ) as HTMLIFrameElement;
    if (!appetizeFrame) {
        console.warn("The appetize.io iframe was not found. Creating one");
        return createAppetizeIframe();
    }

    return appetizeFrame;
};

export const loadUrl = (url: string) => {
    const iframe = getAppetizeIframe();
    if (iframe && iframe.src !== url) {
        iframe.src = url;
    }
};
