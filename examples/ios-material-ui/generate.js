const { generateStories } = require('@storybook/native')

const components = ['Button', 'FloatingButton', 'TextField', 'Slider', 'Spinner'];

const promises = components.map((component) => {
  return generateStories({
    category: component,
    filePath: `./stories/${component.toLowerCase()}.stories.jsx`,
    apiKey: 'yc0e33432655wbjnnnemyghhxm',
    platform: 'ios',
    stories: [{
      name: 'Example',
      appLaunchArgs: {
        'launch_option': component.toLowerCase()
      }
    }]
  })
});

Promise.all(promises).catch((err) => {
  console.error(err)
  process.exit(1)
});
