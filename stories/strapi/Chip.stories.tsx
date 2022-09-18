import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '@mui/joy/Box';
import Chip, { ChipProps } from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';

const meta: Meta = {
  title: 'Strapi/Chip',
  component: Chip,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Badge: Story<ChipProps> = args => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Chip {...args} variant="badge" color="neutral">
      Text
    </Chip>
    <Chip {...args} variant="badge" color="primary">
      Text
    </Chip>
  </Box>
);

export const Tag: Story<ChipProps> = args => (
  <Chip {...args} endDecorator={<ChipDelete variant="plain" />}>
    filtername
  </Chip>
);

export const Usage: Story<ChipProps> = args => (
  <Box sx={{ display: 'flex', gap: 1 }}>
    <Chip {...args} variant="outlined" color="neutral" onClick={() => {}}>
      Filters
    </Chip>
    <Chip
      {...args}
      endDecorator={<ChipDelete variant="plain" />}
      sx={{ fontWeight: 'normal' }}
    >
      Created_at&nbsp;<strong>is</strong> &nbsp;Monday, May 3rd 2021 15:06
    </Chip>
    <Chip
      {...args}
      endDecorator={<ChipDelete variant="plain" />}
      sx={{ fontWeight: 'normal' }}
    >
      Size&nbsp;<strong>is lower than</strong>&nbsp;20MB
    </Chip>
  </Box>
);
