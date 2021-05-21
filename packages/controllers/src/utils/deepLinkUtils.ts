const getQueryString = (data: Record<string, any>) => {
    return Object.keys(data)
        .map((key) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(
                data[key]
            )}`;
        })
        .join("&");
};

export const getFullDeepLinkUrl = (
    baseDeepLinkUrl: string,
    storyParams: Record<string, any>
) => {
    const qsParams = getQueryString(storyParams);
    return `${baseDeepLinkUrl}?${qsParams}`;
};
