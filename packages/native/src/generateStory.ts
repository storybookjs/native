type DefaultDevice = Record<Platform, string>;

const defaultDevices: DefaultDevice = {
    android: 'nexus5',
    ios: 'iphone9'
};

export const generateStory = ({ name, appLaunchArgs, docs }: StoryParams, platform: Platform, apiKey: string) => {
    const storyName = name;
    const notesContent = docs ? `\`${docs.replace(/`/g, "\\`")}\`` : null;
    const params = `${storyName}.parameters = {
    docs: {
        page: () => <Description markdown={${notesContent}} />
    }
}`;
    return `
export const ${storyName} = (props) => {
    const url = getAppetizeUrl(${JSON.stringify(appLaunchArgs)}, props, '${apiKey}');

    return (
        <iframe
            title="${name} appetize-embed"
            src={url}
            width="1400px" 
            height="888px" 
            scrolling="no"
            id="appetize-iframe"
            frameBorder="0" />
    );
};
${storyName}.args = {
    device: '${defaultDevices[platform]}'
}
${params}`;
};
