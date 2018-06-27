import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button/Button';
import Banner from '../src/components/Banner/Banner'
import Select from '../src/components/Select/Select'

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

const SelectStories = storiesOf("Select", module);

SelectStories.add(
  "Select",
  withInfo({ inline: false })(() =>
    <Select />
  )
)