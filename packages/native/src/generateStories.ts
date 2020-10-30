import fs from 'fs-extra';
import path from 'path';
import _ from 'lodash';

import { generateStory } from './generateStory';

const getDevices = (platform: Platform): string[] => {
    if (platform === 'android') {
        return ['nexus5', 'nexus7', 'nexus9'];
    } else if (platform === 'ios') {
        return ['ipadair', 'iphone6s', 'iphone6splus', 'ipadair2', 'iphone9'];
    }
    throw new Error(`No device(s) for platform: ${platform}`);
};

export const generateStories = async (config: Config) => {
    const templatePath = path.join(__dirname, '..', 'story.template');
    const template = await fs.readFile(templatePath, 'utf8');
    const compiled = _.template(template);

    const storyFileData = compiled({
        category: config.category,
        stories: config.stories.map((story) => {
            return generateStory(story, config.platform, config.apiKey);
        }).join('\n'),
        devices: JSON.stringify(getDevices(config.platform))
    });

    await fs.ensureDir(path.dirname(config.filePath));
    await fs.writeFile(config.filePath, storyFileData);
};
