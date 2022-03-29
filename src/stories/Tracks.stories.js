// List.stories.js|jsx

import React from 'react';

import Tracks from "../components/Tracks"
import { List, ListItem } from "@chakra-ui/react";


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Tracks',
  component: Tracks,
};

export const Empty = (args) => <Tracks {...args} />;

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