import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '@mui/joy/Box';
import Checkbox, { CheckboxProps, checkboxClasses } from '@mui/joy/Checkbox';

const meta: Meta = {
  title: 'Strapi/Checkbox',
  component: Checkbox,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const Disabled: Story<CheckboxProps> = args => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Checkbox {...args} />
    <Checkbox {...args} defaultChecked />
  </Box>
);
Disabled.args = {
  disabled: true,
};

export const Indeterminate: Story<CheckboxProps> = args => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Checkbox {...args} indeterminate />
    <Checkbox {...args} indeterminate disabled />
  </Box>
);
Indeterminate.args = {};

export const Label = Template.bind({});
Label.args = {
  label: 'Title',
};
