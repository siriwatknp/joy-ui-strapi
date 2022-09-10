import React from 'react';
import { Meta, Story } from '@storybook/react';
import Switch, { SwitchProps } from '@mui/joy/Switch';

const meta: Meta = {
  title: 'Strapi/Switch',
  component: Switch,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SwitchProps> = args => <Switch {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  defaultChecked: true,
};

export const NonActivated = Template.bind({});
NonActivated.args = {
  checked: false,
};

export const WithText = Template.bind({});
WithText.args = {
  defaultChecked: true,
  endDecorator: 'Text',
};
