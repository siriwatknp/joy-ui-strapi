import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Textarea, { TextareaProps } from '@mui/joy/Textarea';

const meta: Meta = {
  title: 'Strapi/Textarea',
  component: Textarea,
  argTypes: {
    minRows: {
      type: 'number',
      defaultValue: 2,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TextareaProps> = args => <Textarea {...args} />;

export const Simple: Story<TextareaProps> = args => (
  <FormControl>
    <FormLabel>Label</FormLabel>
    <Textarea placeholder="Placeholder" {...args} />
    <FormHelperText>Description</FormHelperText>
  </FormControl>
);

export const Focused: Story<TextareaProps> = args => (
  <FormControl>
    <FormLabel>Label</FormLabel>
    <Textarea autoFocus placeholder="Placeholder" {...args} />
    <FormHelperText>Description</FormHelperText>
  </FormControl>
);

export const Error: Story<TextareaProps> = args => (
  <FormControl error>
    <FormLabel>Label</FormLabel>
    <Textarea placeholder="Placeholder" {...args} />
    <FormHelperText>Description</FormHelperText>
  </FormControl>
);

export const Disabled: Story<TextareaProps> = args => (
  <FormControl disabled>
    <FormLabel>Label</FormLabel>
    <Textarea placeholder="Placeholder" {...args} />
    <FormHelperText>Description</FormHelperText>
  </FormControl>
);
