export const getFullDeepLinkUrl = (
    baseDeepLinkUrl: string,
    storyParams: Record<string, any>
) => {
    const qsParams = new URLSearchParams(storyParams).toString();
    return `${baseDeepLinkUrl}?${qsParams}`;
};
