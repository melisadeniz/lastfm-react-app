import React from "react";

import Card from "../components/Card";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Card",
  component: Card,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Card {...args} />;

//👇 Each story then reuses that template
export const Light = Template.bind({});
Light.args = {
  task: {
    name: "Kanye West",
    backgroundColor: "white",
    listencount: "12345",
    playcount: "12345",
  },
};

export const Dark = Template.bind({});
Dark.args = {
  task: {
    name: "Kanye West",
    backgroundColor: "gray.900",
    listencount: "12345",
    playcount: "12345",
  },
};
