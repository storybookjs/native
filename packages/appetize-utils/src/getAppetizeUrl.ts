export const getAppetizeUrl = (
    args: Record<any, any>,
    props: Record<any, any>,
    apiKey: string
) => {
    const options = Object.assign(
        {
            params: JSON.stringify(args),
            xdocMsg: true,
            autoplay: true,
        },
        props
    );
    const urlWithoutParams = "https://appetize.io/embed/" + apiKey;
    const qsParams = new URLSearchParams(options).toString();

    return urlWithoutParams + "?" + qsParams;
};
