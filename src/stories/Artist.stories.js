// Button.stories.js|jsx

import React from 'react';

import Artist from '../components/Artist';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Artist',
  component: Artist,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Artist {...args} />;

//👇 Each story then reuses that template
export const FirstStory = Template.bind({});
FirstStory.args = {
   primary: true,
   label: 'Artist',
};