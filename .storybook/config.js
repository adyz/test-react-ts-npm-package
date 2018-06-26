import { configure } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
configureActions()
function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}
configure(loadStories, module);