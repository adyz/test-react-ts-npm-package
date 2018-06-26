import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button/Button';
import Banner from '../src/components/Banner/Banner'

const ButtonStories = storiesOf("Button", module);

ButtonStories.add(
  "Button",
  withInfo({ inline: false })(() =>
    <Button onClick={action('clicked')}>Test Button</Button>
  )
)


const BannernStories = storiesOf("Banner", module);

BannernStories.add(
  "Banner",
  withInfo({ inline: false })(() =>
    <Banner name="World" />
  )
)