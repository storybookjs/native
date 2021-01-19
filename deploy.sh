if [ "${CIRCLE_BRANCH}" == "master" ]; then
  yarn release:storybook
fi
