import React from 'react';
import { Meta, Story } from '@storybook/react';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';

const meta: Meta = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IconButtonProps> = args => (
  <IconButton aria-label="Edit" {...args}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8021 1.75705C12.0659 2.0209 12.0659 2.43668 11.8021 2.70054L10.4908 4.00383L7.99616 1.50918L9.29945 0.197893C9.5633 -0.0659642 9.97908 -0.0659642 10.2429 0.197893L11.8021 1.75705ZM0 12V9.50535L7.10013 2.4052L9.59477 4.89984L2.49464 12H0Z"
        fill="currentColor"
      />
    </svg>
  </IconButton>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
