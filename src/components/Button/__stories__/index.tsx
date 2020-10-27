/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import './index.scss';
import { Button, BaseButtonProps } from '../index';

export default {
  title: 'L-UI/Base/Button',
  component: Button,
  argTypes: {
  },
} as Meta;

const Template: Story<BaseButtonProps> = (args) => (
  <Button {...args}>{args.type}</Button>
);

export const Default = Template.bind({});

Default.args = {
  type: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Warn = Template.bind({});

Warn.args = {
  type: 'warn',
};

export const Danger = Template.bind({});

Danger.args = {
  type: 'danger',
};

export const Text = Template.bind({});

Text.args = {
  type: 'text',
};

export const Info = Template.bind({});

Info.args = {
  type: 'info',
};
