import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '@mui/joy/Box';
import Button, { ButtonProps } from '@mui/joy/Button';

const meta: Meta = {
  title: 'Strapi/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Text',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Button {...args} />
    <Button {...args} disabled />
  </Box>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'soft',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'outlined',
  color: 'neutral',
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
};

export const SuccessSecondary = Template.bind({});
SuccessSecondary.args = {
  variant: 'soft',
  color: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
};

export const DangerSecondary = Template.bind({});
DangerSecondary.args = {
  variant: 'soft',
  color: 'danger',
};

export const Sizes: Story<ButtonProps> = args => (
  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
    <Button {...args} size="sm" />
    <Button {...args} />
    <Button {...args} size="lg" />
  </Box>
);
