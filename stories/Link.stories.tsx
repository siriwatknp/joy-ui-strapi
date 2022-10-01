import React from 'react';
import { Meta, Story } from '@storybook/react';
import Link, { LinkProps } from '@mui/joy/Link';

const meta: Meta = {
  title: 'Components/Link',
  component: Link,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LinkProps> = args => (
  <Link href="#" {...args}>
    Text
  </Link>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
