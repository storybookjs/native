import path from "path";
import fs from "fs-extra";
import _, { TemplateExecutor } from "lodash";

import { Config, StoryParams } from "./types";

export const generateStory = async (
    { name, appParams, docs }: StoryParams,
    config: Config,
    isControl: boolean
): Promise<string> => {
    const storyCompiled = await createTemplate("story.template");
    const compiledDefaultArgs = await createTemplate("defaults.template");

    const docsContent = docs ? docs.replace(/`/g, "\\`") : undefined;
    const storyName = isControl? `${name}Playground` : name;

    const standardStory = storyCompiled({
        storyName: storyName,
        apiKey: config.apiKey,
        platform: config.platform,
        storyParams: JSON.stringify(appParams),
        deepLinkBaseUrl: config.deepLinkUrl
            ? `"${config.deepLinkUrl}"`
            : "undefined",
        docsContent: docsContent ? `\`${docsContent}\`` : "undefined"
    });

    if (!isControl) {
        return standardStory;
    } else {
        return standardStory + "\n" + compiledDefaultArgs({
            storyName: storyName,
            controls: config.controls
        });
    }

};

export const createTemplate = async (templateName: string): Promise<TemplateExecutor> => {
    const templatePath = path.join(__dirname, "..", templateName);
    const template = await fs.readFile(templatePath, "utf8");
    const compiled = _.template(template);
    return compiled;
}
