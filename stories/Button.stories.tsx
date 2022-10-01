import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '@mui/joy/Box';
import Button, { ButtonProps } from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import SvgIcon from '@mui/joy/SvgIcon';

const meta: Meta = {
  title: 'Components/Button',
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

export const Loading = Template.bind({});
Loading.args = {
  startDecorator: <CircularProgress variant="solid" />,
};

const Pencil = () => (
  <SvgIcon viewBox="0 0 12 12">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.8021 1.75705C12.0659 2.0209 12.0659 2.43668 11.8021 2.70054L10.4908 4.00383L7.99616 1.50918L9.29945 0.197893C9.5633 -0.0659642 9.97908 -0.0659642 10.2429 0.197893L11.8021 1.75705ZM0 12V9.50535L7.10013 2.4052L9.59477 4.89984L2.49464 12H0Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export const Sizes: Story<ButtonProps> = args => (
  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
    <Button {...args} size="sm" />
    <Button {...args} />
    <Button {...args} size="lg" />
  </Box>
);
Sizes.args = {
  startDecorator: <Pencil />,
};
