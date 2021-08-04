import path from "path";
import fs from "fs-extra";
import _ from "lodash";

import { Config, StoryParams } from "./types";

export const generateStory = async (
    { name, appParams, docs }: StoryParams,
    config: Config
): Promise<string> => {
    const storyTemplatePath = path.join(__dirname, "..", "story.template");
    const storyTemplate = await fs.readFile(storyTemplatePath, "utf8");
    const storyCompiled = _.template(storyTemplate);

    const templatePath = path.join(__dirname, "..", "defaults.template");
    const template = await fs.readFile(templatePath, "utf8");
    const compiled = _.template(template);

    const docsContent = docs ? docs.replace(/`/g, "\\`") : undefined;

    return (
        storyCompiled({
            storyName: name,
            apiKey: config.apiKey,
            platform: config.platform,
            storyParams: JSON.stringify(appParams),
            deepLinkBaseUrl: config.deepLinkUrl
                ? `"${config.deepLinkUrl}"`
                : "undefined",
            docsContent: docsContent ? `\`${docsContent}\`` : "undefined"
        }) +
        "\n" +
        compiled({
            storyName: name,
            controls: config.controls
        })
    );

};
