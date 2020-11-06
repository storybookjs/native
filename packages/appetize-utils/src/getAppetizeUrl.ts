export const getAppetizeUrl = (
    args: Record<string, any>,
    props: Record<string, any>,
    apiKey: string
) => {
    const options = {
        params: JSON.stringify(args),
        xdocMsg: true,
        autoplay: true,
        ...props
    };
    const urlWithoutParams = `https://appetize.io/embed/${apiKey}`;
    // @ts-ignore
    const qsParams = new URLSearchParams(options).toString();

    return `${urlWithoutParams}?${qsParams}`;
};
