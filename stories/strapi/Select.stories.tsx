import React from 'react';
import { Meta, Story } from '@storybook/react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Select, { SelectProps } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import IconButton from '@mui/joy/IconButton';

const meta: Meta = {
  title: 'Strapi/Select',
  component: Select,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SelectProps<any>> = args => <Select {...args} />;

const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.6667 5.92597C12.6667 6.08646 12.609 6.22535 12.4935 6.34263L8.41017 10.4908C8.29472 10.6081 8.158 10.6667 8.00001 10.6667C7.84202 10.6667 7.70531 10.6081 7.58985 10.4908L3.50652 6.34263C3.39107 6.22535 3.33334 6.08646 3.33334 5.92597C3.33334 5.76547 3.39107 5.62658 3.50652 5.5093C3.62197 5.39202 3.75869 5.33337 3.91668 5.33337H12.0833C12.2413 5.33337 12.378 5.39202 12.4935 5.5093C12.609 5.62658 12.6667 5.76547 12.6667 5.92597Z"
      fill="#8E8EA9"
    />
  </svg>
);

export const Simple: Story<SelectProps<any>> = args => (
  <FormControl>
    <FormLabel>Label</FormLabel>
    <Select placeholder="Select" indicator={<ArrowDown />} {...args}>
      <Option value="1">4 lines</Option>
      <Option value="2">4 lines</Option>
      <Option value="3">4 lines</Option>
      <Option value="4">4 lines</Option>
    </Select>
    <FormHelperText>Description</FormHelperText>
  </FormControl>
);

const Cross = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
  >
    <path
      d="M9.16665 1.67266L8.32736 0.833374L4.99998 4.16076L1.6726 0.833374L0.833313 1.67266L4.16069 5.00004L0.833313 8.32742L1.6726 9.16671L4.99998 5.83933L8.32736 9.16671L9.16665 8.32742L5.83927 5.00004L9.16665 1.67266Z"
      fill="#8E8EA9"
    />
  </svg>
);
export const Clearable: Story<SelectProps<any>> = args => (
  <FormControl>
    <FormLabel>Label</FormLabel>
    <Select
      placeholder="Select"
      indicator={<ArrowDown />}
      endDecorator={
        <IconButton
          variant="plain"
          onMouseDown={event => {
            event.stopPropagation();
          }}
          onClick={() => {
            alert('clear');
          }}
        >
          <Cross />
        </IconButton>
      }
      {...args}
    >
      <Option value="1">4 lines</Option>
      <Option value="2">4 lines</Option>
      <Option value="3">4 lines</Option>
      <Option value="4">4 lines</Option>
    </Select>
    <FormHelperText>Description</FormHelperText>
  </FormControl>
);

export const Error: Story<SelectProps<any>> = args => (
  <FormControl error>
    <FormLabel>Label</FormLabel>
    <Select placeholder="Select" indicator={<ArrowDown />} {...args}>
      <Option value="1">4 lines</Option>
      <Option value="2">4 lines</Option>
      <Option value="3">4 lines</Option>
      <Option value="4">4 lines</Option>
    </Select>
    <FormHelperText>Description</FormHelperText>
  </FormControl>
);

export const Disabled: Story<SelectProps<any>> = args => (
  <FormControl disabled>
    <FormLabel>Label</FormLabel>
    <Select placeholder="Select" indicator={<ArrowDown />} {...args}>
      <Option value="1">4 lines</Option>
      <Option value="2">4 lines</Option>
      <Option value="3">4 lines</Option>
      <Option value="4">4 lines</Option>
    </Select>
    <FormHelperText>Description</FormHelperText>
  </FormControl>
);
