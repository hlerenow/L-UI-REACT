import * as React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, select,
} from '@storybook/addon-knobs';

import './index.scss';
import Button from '../index';

export const baseButton = () => {
  const bType = select('type', ['default', 'primary', 'success', 'info', 'warning', 'danger'], 'default');
  return (
    <div>
      <h2>Button</h2>
      <div className="item-box">
        <div className="item" onClick={action('click')}><Button type={bType}>{bType}</Button></div>
      </div>
    </div>
  );
};

baseButton.story = {
  parameters: {
    docs: { storyDescription: '4 sizes are supported.' },
  },
};

export default {
  title: 'Button',
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Displays 1an image that represents a user or organization',
  },
};
