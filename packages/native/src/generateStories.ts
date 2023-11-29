import fs from "fs-extra";
import path from "path";

import { createTemplate, generateStory } from "./generateStory";
import { Config } from "./types";

function stringify(entry: [string, unknown]): [string, string] {
    if (Array.isArray(entry[1])) {
        return [entry[0], JSON.stringify(entry[1])];
    }
    if (typeof entry[1] === "boolean") {
        return [entry[0], entry[1].toString()];
    }
    return entry as [string, string];
}

export const generateStories = async (config: Config): Promise<void> => {
    const compiled = await createTemplate("category.template");
    const storiesContent = await Promise.all(
        config.stories.map(async (story) => generateStory(story, config, false))
    );
    const storyFileData = compiled({
        category: config.category,
        stories: storiesContent.join("\n")
    });

    await fs.ensureDir(path.dirname(config.filePath));
    await fs.writeFile(config.filePath, storyFileData);

    if (typeof config.controls !== 'undefined') {
        const controlCompiled = await createTemplate("categoryControl.template");
        const transformedControls = config.controls.map((item) => {
            return stringify(item);
        });

        const controlStoriesContent = await Promise.all(
            config.stories.map(async (story) => generateStory(story, config, true))
        );
        const controlStoryFileData = controlCompiled({
            category: config.category,
            controls: transformedControls,
            stories: controlStoriesContent.join("\n")
        });

        const playgroundPath = config.filePath.replace('.stories.jsx', '.playground.stories.jsx');
        await fs.ensureDir(path.dirname(playgroundPath));
        await fs.writeFile(playgroundPath, controlStoryFileData);
    }
};
