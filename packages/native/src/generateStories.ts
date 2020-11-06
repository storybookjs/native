import fs from 'fs-extra';
import path from 'path';
import _ from 'lodash';

import { generateStory } from './generateStory';
import { Config } from './types';

export const generateStories = async (config: Config): Promise<void> => {
    const templatePath = path.join(__dirname, '..', 'category.template');
    const template = await fs.readFile(templatePath, 'utf8');
    const compiled = _.template(template);

    const storiesContent = await Promise.all(
        config.stories.map(async (story) => {
            return await generateStory(story, config);
        })
    );
    const storyFileData = compiled({
        category: config.category,
        stories: storiesContent.join('\n')
    });

    await fs.ensureDir(path.dirname(config.filePath));
    await fs.writeFile(config.filePath, storyFileData);
};
