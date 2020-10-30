import path from 'path';
import fs from 'fs-extra';
import _ from 'lodash';

type DefaultDevice = Record<Platform, string>;

const defaultDevices: DefaultDevice = {
    android: 'nexus5',
    ios: 'iphone9'
};

export const generateStory = async ({ name, appParams, docs }: StoryParams, config: Config) => {
    const templatePath = path.join(__dirname, '..', 'story.template');
    const template = await fs.readFile(templatePath, 'utf8');
    const compiled = _.template(template);

    const docsContent = docs ? docs.replace(/`/g, "\\`") : undefined;
    const appetizeUrl = `getAppetizeUrl(${config.deepLinkUrl ? '{}' : JSON.stringify(appParams)}, props, '${config.apiKey}');`;

    return compiled({
        storyName: name,
        appetizeUrl,
        deepLinkParams: JSON.stringify(config.deepLinkUrl ? appParams : {}),
        deepLinkUrl: config.deepLinkUrl,
        docsContent: docsContent ? `\`${docsContent}\`` : 'undefined',
        defaultDevice: defaultDevices[config.platform]
    });
};
