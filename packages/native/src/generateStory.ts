import path from 'path';
import fs from 'fs-extra';
import _ from 'lodash';

import { Config, StoryParams } from './types';

export const generateStory = async ({ name, appParams, docs }: StoryParams, config: Config): Promise<string> => {
    const templatePath = path.join(__dirname, '..', 'story.template');
    const template = await fs.readFile(templatePath, 'utf8');
    const compiled = _.template(template);

    const docsContent = docs ? docs.replace(/`/g, "\\`") : undefined;

    return compiled({
        storyName: name,
        apiKey: config.apiKey,
        platform: config.platform,
        storyParams: JSON.stringify(appParams),
        deepLinkBaseUrl: config.deepLinkUrl,
        docsContent: docsContent ? `\`${docsContent}\`` : 'undefined'
    });
};
