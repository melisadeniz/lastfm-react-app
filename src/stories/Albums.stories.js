// List.stories.js|jsx

import React from 'react';

import Albums from "../components/Albums"
import { List, ListItem } from "@chakra-ui/react";


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Albums',
  component: Albums,
};

export const Empty = (args) => <Albums {...args} />;

export const OneItem = (args) => (
  <List {...args}>
    <ListItem />
  </List>
);

export const ManyItems = (args) => (
  <List {...args}>
    <ListItem />
    <ListItem />
    <ListItem />
  </List>
);