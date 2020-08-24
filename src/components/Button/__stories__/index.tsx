/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import './index.scss';
import { Button, BaseButtonProps } from '../index';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
  },
} as Meta;

const Template: Story<BaseButtonProps> = (args) => <Button {...args}>{args.type}</Button>;

export const Default = Template.bind({});
