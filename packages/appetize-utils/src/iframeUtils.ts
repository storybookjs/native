export const getAppetizeIframe = (): HTMLIFrameElement | null => {
    const storybookFrame = document.getElementById(
        "storybook-preview-iframe"
    ) as HTMLIFrameElement;
    const innerDoc = storybookFrame
        ? storybookFrame.contentDocument ||
          storybookFrame.contentWindow?.document
        : document;
    if (!innerDoc) {
        console.warn("The inner document was not found");
        return null;
    }

    const appetizeFrame = innerDoc.getElementById(
        "appetize-iframe"
    ) as HTMLIFrameElement;
    if (!appetizeFrame) {
        console.warn("The appetize.io iframe was not found");
        return null;
    }

    return appetizeFrame;
};

export const loadUrl = (url: string) => {
    const iframe = getAppetizeIframe();
    if (iframe && iframe.src !== url) {
        iframe.src = url;
    }
};
