import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '@mui/joy/Box';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio, { RadioProps } from '@mui/joy/Radio';

const meta: Meta = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<RadioProps> = args => <Radio {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const Disabled: Story<RadioProps> = args => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <Radio {...args} />
    <Radio {...args} defaultChecked />
  </Box>
);
Disabled.args = {
  disabled: true,
};

export const Label: Story<RadioProps> = args => (
  <RadioGroup defaultValue="1">
    <Radio value="1" {...args} />
    <Radio value="2" {...args} />
  </RadioGroup>
);
Label.args = {
  label: 'Title',
};

// export const RadioBox: Story<RadioProps> = args => (
//   <RadioGroup>
//     <Sheet variant="outlined" sx={{ borderRadius: 'sm' }}>
//       <FormControl sx={{ flexDirection: 'row', alignItems: 'center', p: 2 }}>
//         <Radio overlay />
//         <Box sx={{ ml: 2 }}>
//           <FormLabel>Selection title</FormLabel>
//           <FormHelperText>
//             One line description maximum lorem ipsum{' '}
//           </FormHelperText>
//         </Box>
//       </FormControl>
//     </Sheet>
//   </RadioGroup>
// );
