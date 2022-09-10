import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '@mui/joy/Box';
import Tabs, { TabsProps } from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Chip from '@mui/joy/Chip';

const meta: Meta = {
  title: 'Strapi/Tabs',
  component: Tabs,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Default: Story<TabsProps> = args => (
  <Box sx={{ p: 3, bgcolor: 'neutral.150' }}>
    <Tabs defaultValue={0} {...args}>
      <TabList>
        <Tab>Collection type</Tab>
        <Tab>Single type</Tab>
        <Tab>Plugins</Tab>
        <Tab>Settings</Tab>
      </TabList>
      <TabPanel value={0}>Collection tab</TabPanel>
      <TabPanel value={1}>Single tab</TabPanel>
      <TabPanel value={2}>Plugins tab</TabPanel>
      <TabPanel value={3}>Settings tab</TabPanel>
    </Tabs>
  </Box>
);

export const Underline: Story<TabsProps> = args => (
  <Tabs defaultValue={0} {...args}>
    <TabList>
      <Tab variant="plain">Text</Tab>
      <Tab variant="plain" color="danger">
        Text
      </Tab>
      <Tab variant="plain">
        Text{' '}
        <Chip variant="badge" color="neutral" sx={{ ml: 1 }}>
          6
        </Chip>
      </Tab>
      <Tab variant="plain">Text</Tab>
    </TabList>
  </Tabs>
);
