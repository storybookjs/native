const getQueryString = (data: Record<string, any>) => {
    return Object.keys(data)
        .map((key) => {
            const value = data[key];
            return `${encodeURIComponent(key)}=${
                typeof value === "object" || Array.isArray(value)
                    ? btoa(JSON.stringify(value))
                    : encodeURIComponent(value)
            }`;
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
