import path from "path";
import fs from "fs-extra";
import _ from "lodash";

import { Config, StoryParams } from "./types";

export const generateStory = async (
    { name, appParams, docs }: StoryParams,
    config: Config,
    isControl: boolean
): Promise<string> => {
    const storyTemplatePath = path.join(__dirname, "..", "story.template");
    const storyTemplate = await fs.readFile(storyTemplatePath, "utf8");
    const storyCompiled = _.template(storyTemplate);

    const defaultArgsTemplatePath = path.join(__dirname, "..", "defaults.template");
    const defaultArgsTemplate = await fs.readFile(defaultArgsTemplatePath, "utf8");
    const compiledDefaultArgs = _.template(defaultArgsTemplate);

    const docsContent = docs ? docs.replace(/`/g, "\\`") : undefined;
    const storyName = isControl? `${name}Playground` : name

    const standardStory = storyCompiled({
        storyName: storyName,
        apiKey: config.apiKey,
        platform: config.platform,
        storyParams: JSON.stringify(appParams),
        deepLinkBaseUrl: config.deepLinkUrl
            ? `"${config.deepLinkUrl}"`
            : "undefined",
        docsContent: docsContent ? `\`${docsContent}\`` : "undefined"
    })

    if (!isControl) {
        return standardStory
    } else {
        return standardStory + "\n" + compiledDefaultArgs({
            storyName: storyName,
            controls: config.controls
        })
    }

};
