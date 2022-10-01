import React from 'react';
import { Meta, Story } from '@storybook/react';
import Menu, { MenuProps } from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Link from '@mui/joy/Link';

const meta: Meta = {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const CaretDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.91659 3.70362C7.91659 3.80393 7.88051 3.89074 7.80835 3.96404L5.25627 6.55663C5.18411 6.62993 5.09866 6.66659 4.99992 6.66659C4.90118 6.66659 4.81573 6.62993 4.74357 6.55663L2.19149 3.96404C2.11933 3.89074 2.08325 3.80393 2.08325 3.70362C2.08325 3.60331 2.11933 3.51651 2.19149 3.44321C2.26364 3.3699 2.34909 3.33325 2.44784 3.33325H7.552C7.65074 3.33325 7.73619 3.3699 7.80835 3.44321C7.88051 3.51651 7.91659 3.60331 7.91659 3.70362Z"
      fill="#8E8EA9"
    />
  </svg>
);

export const Simple: Story<MenuProps> = args => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<null | HTMLButtonElement>(null);
  return (
    <div>
      <Link
        ref={ref}
        component="button"
        color="neutral"
        level="buttonText"
        endDecorator={<CaretDown />}
        onClick={() => setOpen(true)}
      >
        January
      </Link>
      <Menu
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={ref.current}
      >
        <MenuItem>January</MenuItem>
        <MenuItem>February</MenuItem>
        <MenuItem>March</MenuItem>
        <MenuItem>April</MenuItem>
        <MenuItem>May</MenuItem>
      </Menu>
    </div>
  );
};
