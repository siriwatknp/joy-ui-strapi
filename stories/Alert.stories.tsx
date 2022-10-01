import React from 'react';
import { Meta, Story } from '@storybook/react';
import Stack from '@mui/joy/Stack';
import Alert, { AlertProps } from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';

const meta: Meta = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Info = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 4.1C10.2571 4.1 10.5085 4.17624 10.7222 4.31909C10.936 4.46194 11.1026 4.66497 11.201 4.90251C11.2994 5.14006 11.3252 5.40144 11.275 5.65362C11.2249 5.90579 11.101 6.13743 10.9192 6.31924C10.7374 6.50105 10.5058 6.62486 10.2536 6.67502C10.0014 6.72518 9.74006 6.69944 9.50251 6.60104C9.26497 6.50265 9.06194 6.33602 8.91909 6.12224C8.77624 5.90846 8.7 5.65712 8.7 5.4C8.7 5.05522 8.83696 4.72456 9.08076 4.48076C9.32456 4.23696 9.65522 4.1 10 4.1ZM13.2 14.9C13.2 15.1761 12.9761 15.4 12.7 15.4H7.7C7.42386 15.4 7.2 15.1761 7.2 14.9V14.3C7.2 14.0239 7.42386 13.8 7.7 13.8H9.4V9.4H8.3C8.02386 9.4 7.8 9.17614 7.8 8.9V8.3C7.8 8.02386 8.02386 7.8 8.3 7.8H10.5C10.7761 7.8 11 8.02386 11 8.3V13.8H12.7C12.9761 13.8 13.2 14.0239 13.2 14.3V14.9Z"
      fill="#4945FF"
    />
  </svg>
);

const Close = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z"
      fill="#4A4A6A"
    />
  </svg>
);

const ExternalLink = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
  >
    <path
      d="M7.44108 1.29424C7.08371 1.29424 6.79389 1.00443 6.79389 0.647051C6.79389 0.28981 7.08371 0 7.44108 0H10.3529C10.7101 0 11 0.290086 11 0.647051V3.55905C11 3.91629 10.7102 4.2061 10.3529 4.2061C9.99571 4.2061 9.7059 3.91629 9.7059 3.55905V2.20908L5.95749 5.95749C5.70483 6.21001 5.29517 6.21001 5.04251 5.95749C4.78999 5.70483 4.78999 5.29517 5.04251 5.04251L8.79092 1.29424H7.44108ZM9.7059 6.14712C9.7059 5.78974 9.99571 5.50007 10.3529 5.50007C10.7102 5.50007 11 5.78974 11 6.14712V10.3529C11 10.7102 10.7102 11 10.3529 11H0.647051C0.28981 11 0 10.7102 0 10.3529V0.647051C0 0.28981 0.28981 0 0.647051 0H4.85288C5.21026 0 5.50007 0.28981 5.50007 0.647051C5.50007 1.00443 5.21026 1.29424 4.85288 1.29424H1.29424V9.7059H9.7059V6.14712Z"
      fill="#4945FF"
    />
  </svg>
);

export const Information: Story<AlertProps> = args => (
  <Alert
    {...args}
    variant="soft"
    color="primary"
    startDecorator={<Info />}
    endDecorator={
      <IconButton
        variant="plain"
        color="primary"
        size="sm"
        sx={{ my: -1, mr: -1 }}
      >
        <Close />
      </IconButton>
    }
  >
    <Typography fontWeight="lg">Information alert:</Typography>&nbsp; lorem
    ipsum dolor sit amet
  </Alert>
);

export const InformationLarge: Story<AlertProps> = args => (
  <Alert
    {...args}
    variant="soft"
    color="primary"
    startDecorator={<Info />}
    endDecorator={
      <IconButton
        variant="plain"
        color="primary"
        size="sm"
        sx={{ my: -1, mr: -1 }}
      >
        <Close />
      </IconButton>
    }
    sx={{ alignItems: 'flex-start' }}
  >
    <Stack spacing={1}>
      <Typography fontWeight="lg">Information alert</Typography>
      <Typography>
        Alert with title and longer description, lorem ipsum dolor sit amet
        constrectum adipisicng lorem ipsum dolor sit amet consrectumis
        adipisingus.
      </Typography>
    </Stack>
  </Alert>
);

export const InformationLink: Story<AlertProps> = args => (
  <Alert
    {...args}
    variant="soft"
    color="primary"
    startDecorator={<Info />}
    endDecorator={
      <React.Fragment>
        <Link endDecorator={<ExternalLink />}>See more</Link>
        <IconButton
          variant="plain"
          color="primary"
          size="sm"
          sx={{ my: -1, mr: -1, ml: 1 }}
        >
          <Close />
        </IconButton>
      </React.Fragment>
    }
  >
    <Typography fontWeight="lg">Information alert:</Typography>&nbsp; lorem
    ipsum dolor sit amet
  </Alert>
);

export const InformationLargeLink: Story<AlertProps> = args => (
  <Alert
    {...args}
    variant="soft"
    color="primary"
    startDecorator={<Info />}
    endDecorator={
      <IconButton
        variant="plain"
        color="primary"
        size="sm"
        sx={{ my: -1, mr: -1 }}
      >
        <Close />
      </IconButton>
    }
    sx={{ alignItems: 'flex-start' }}
  >
    <Stack spacing={1}>
      <Typography fontWeight="lg">Information alert</Typography>
      <Typography>
        Alert with title and longer description, lorem ipsum dolor sit amet
        constrectum adipisicng lorem ipsum dolor sit amet consrectumis
        adipisingus.
      </Typography>
      <Link endDecorator={<ExternalLink />}>See more</Link>
    </Stack>
  </Alert>
);
