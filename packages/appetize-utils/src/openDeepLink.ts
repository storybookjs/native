import { loadUrl } from "./iframeUtils";
import { sendMessage } from "./sessionUtils";

export const openDeepLink = (
    appetizeUrl: string,
    deepLinkUrl: string,
    storyParams: Record<any, any>
) => {
    loadUrl(appetizeUrl);
    const qsParams = new URLSearchParams(storyParams).toString();
    const newAppUrl = deepLinkUrl + "?" + qsParams;
    sendMessage({ type: "url", value: newAppUrl }, true);
};
