import fs from "fs-extra";
import path from "path";
import _ from "lodash";

import { generateStory } from "./generateStory";
import { Config } from "./types";

export const generateStories = async (config: Config): Promise<void> => {
    const templatePath = path.join(__dirname, "..", "category.template");
    const template = await fs.readFile(templatePath, "utf8");
    const compiled = _.template(template);

    const storiesContent = await Promise.all(
        config.stories.map(async (story) => generateStory(story, config))
    );
    const storyFileData = compiled({
        category: config.category,
        stories: storiesContent.join("\n")
    });

    await fs.ensureDir(path.dirname(config.filePath));
    await fs.writeFile(config.filePath, storyFileData);
};

export const generateControlledStories = async (
    config: Config
): Promise<void> => {
    const templatePath = path.join(__dirname, "..", "category.template");
    const template = await fs.readFile(templatePath, "utf8");
    const compiled = _.template(template);
    const usableControls = config.controls.map((item) => {
        return stringify(item);
    });

    const storiesContent = await Promise.all(
        config.stories.map(async (story) => generateStory(story, config))
    );
    const storyFileData = compiled({
        category: config.category,
        controls: usableControls,
        stories: storiesContent.join("\n")
    });

    await fs.ensureDir(path.dirname(config.filePath));
    await fs.writeFile(config.filePath, storyFileData);
};

function stringify(entry: [string, unknown]): [string, string] {
    if (Array.isArray(entry[1])) {
        return [entry[0], JSON.stringify(entry[1])];
    } else if (typeof entry[1] === "boolean") {
        return [entry[0], entry[1].toString()];
    } else {
        return entry as [string, string];
    }
}

