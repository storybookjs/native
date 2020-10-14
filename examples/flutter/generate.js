const { generateStories } = require('@storybook/native')

const components = ['Banner', 'Button', 'Checkbox', 'Chip', 'FAB', 'Radio', 'Text'];

generateStories({
  category: 'Android',
  filePath: `./stories/android.stories.jsx`,
  apiKey: 'a46a48pe86ceyuurevybt12qb0',
  platform: 'android',
  stories: components.map((component) => {
    return {
      name: component,
      appLaunchArgs: {
        page: component.toLowerCase()
      }
    };
  })
}).catch((err) => {
  console.error(err)
  process.exit(1)
});

// TODO: generate ios stories
