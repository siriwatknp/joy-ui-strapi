import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '@mui/joy/Box';
import Card, { CardProps } from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardOverflow from '@mui/joy/CardOverflow';
import CardContent from '@mui/joy/CardContent';
import AspectRatio from '@mui/joy/AspectRatio';
import Chip from '@mui/joy/Chip';
import Checkbox from '@mui/joy/Checkbox';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

const meta: Meta = {
  title: 'Strapi/Card',
  component: Card,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Pencil = () => (
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
);

export const Default = () => (
  <Card sx={{ maxWidth: 303 }}>
    <CardOverflow>
      <AspectRatio>
        <div />
      </AspectRatio>
      <CardCover>
        <Box sx={{ ':hover > div': { opacity: 1 } }}>
          <Box
            sx={{
              opacity: 0,
              transition: '0.3s',
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              flex: 1,
              alignSelf: 'flex-start',
            }}
          >
            <Checkbox />
            <IconButton>
              <Pencil />
            </IconButton>
          </Box>
        </Box>
      </CardCover>
    </CardOverflow>
    <Box sx={{ display: 'flex', alignItems: 'flex-start', pt: 2 }}>
      <Box sx={{ flex: 1 }}>
        <Typography fontWeight="md">File name</Typography>
        <Typography level="smallText">PNG - 2500x3209 - 2.3MB</Typography>
      </Box>
      <Chip variant="badge" color="neutral">
        File
      </Chip>
    </Box>
  </Card>
);

export const Error = () => (
  <React.Fragment>
    <Card color="danger" sx={{ maxWidth: 303 }}>
      <CardOverflow>
        <AspectRatio>
          <div />
        </AspectRatio>
      </CardOverflow>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', pt: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography fontWeight="md">File name</Typography>
          <Typography level="smallText">PNG - 2500x3209 - 2.3MB</Typography>
        </Box>
        <Chip variant="badge" color="neutral">
          File
        </Chip>
      </Box>
    </Card>
    <Typography color="danger" mt={0.5}>
      Error message
    </Typography>
  </React.Fragment>
);

const PdfFile = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="49"
    viewBox="0 0 36 49"
    fill="none"
  >
    <path
      d="M34.9579 12.1886L24.5842 1.1233C23.9211 0.415929 23.0211 0.0117188 22.1211 0.0117188H3.50526C2.55789 0.0117188 1.70526 0.415929 1.04211 1.1233C0.378947 1.83067 0 2.74014 0 3.75067V44.2728C0 46.3443 1.56316 48.0117 3.50526 48.0117H32.4947C34.4368 48.0117 36 46.3443 36 44.2728V14.8159C36 13.8559 35.6211 12.8959 34.9579 12.1886ZM32.9684 13.098H25.2947C24.4421 13.098 23.7316 12.3401 23.7316 11.4307V3.29593L32.9684 13.098ZM32.4947 45.8391H3.50526C2.7 45.8391 2.03684 45.1317 2.03684 44.2728V3.75067C2.03684 3.34646 2.17895 2.94225 2.46316 2.63909C2.74737 2.33593 3.12632 2.18435 3.50526 2.18435H21.6947V11.4307C21.6947 13.5528 23.3053 15.2707 25.2947 15.2707H33.9632V44.2728C33.9632 45.1317 33.3 45.8391 32.4947 45.8391Z"
      fill="#D9822F"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.9466 30.1432C21.4619 30.5197 22.1177 30.9252 22.9141 31.3597C23.8353 31.2583 24.7488 31.2076 25.6544 31.2076C27.9498 31.2076 29.3317 31.5624 29.8001 32.272C30.05 32.5906 30.0656 32.9672 29.847 33.4016C29.847 33.4161 29.8392 33.4306 29.8236 33.4451L29.7767 33.4885V33.5102C29.683 34.0606 29.1287 34.3357 28.1137 34.3357C27.3642 34.3357 26.4664 34.1909 25.4202 33.9012C24.374 33.6116 23.3591 33.2278 22.3753 32.7499C18.9245 33.0975 15.864 33.6985 13.1939 34.5529C10.8049 38.3472 8.91549 40.2444 7.52578 40.2444C7.29156 40.2444 7.07295 40.1937 6.86996 40.0923L6.30783 39.8316C6.29222 39.8172 6.24537 39.7809 6.1673 39.723C6.01115 39.5782 5.96431 39.3175 6.02677 38.941C6.1673 38.3617 6.60451 37.6992 7.3384 36.9533C8.07229 36.2075 9.10286 35.5088 10.4301 34.8571C10.6487 34.7267 10.8283 34.7702 10.9688 34.9874C11 35.0164 11.0157 35.0453 11.0157 35.0743C11.8276 33.8433 12.663 32.4168 13.5218 30.7949C14.5836 28.8253 15.3956 26.9282 15.9577 25.1034C15.583 23.9159 15.3448 22.761 15.2433 21.6386C15.1418 20.5162 15.1926 19.593 15.3956 18.8689C15.5673 18.2896 15.8953 18 16.3793 18H16.8946C17.2537 18 17.527 18.1086 17.7144 18.3258C17.9954 18.63 18.0657 19.1224 17.9252 19.803C17.8939 19.8899 17.8627 19.9478 17.8315 19.9768C17.8471 20.0202 17.8549 20.0782 17.8549 20.1506V20.8023C17.8237 22.5836 17.7144 23.9738 17.527 24.9731C18.3858 27.3481 19.5257 29.0715 20.9466 30.1432ZM7.45563 39.0698C8.26759 38.7223 9.3372 37.5782 10.6644 35.6376C9.86809 36.2169 9.18495 36.8251 8.61502 37.4623C8.04508 38.0995 7.65862 38.6354 7.45563 39.0698ZM16.7301 21.9531C16.5271 20.6498 16.5427 19.6939 16.7769 19.0857V19.0422C16.7925 19.0278 16.8003 19.0133 16.8003 18.9988C16.9877 19.2015 17.0892 19.4622 17.1048 19.7808C17.1048 19.7953 17.1126 19.817 17.1282 19.846C17.1282 19.8605 17.136 19.875 17.1516 19.8894C17.1048 19.9474 17.0736 20.0053 17.058 20.0632C16.9487 20.6425 16.894 20.9539 16.894 20.9973C16.8003 21.5332 16.7457 21.8518 16.7301 21.9531ZM13.8729 33.4432C15.9809 32.6612 18.1982 32.0747 20.5248 31.6837C20.4935 31.6692 20.392 31.6004 20.2203 31.4773C20.0485 31.3542 19.9236 31.2565 19.8455 31.1841C18.6588 30.2138 17.6673 28.9393 16.8709 27.3608C16.4493 28.6063 15.8013 30.0327 14.9269 31.6402C14.4585 32.4512 14.1071 33.0522 13.8729 33.4432ZM25.7248 32.5739C27.5361 32.5739 28.6291 32.7477 29.0038 33.0952C29.0351 33.1242 29.0507 33.1459 29.0507 33.1604C28.9882 33.1749 28.8477 33.1821 28.6291 33.1821C27.8796 33.1821 26.9115 32.9794 25.7248 32.5739Z"
      fill="#D9822F"
    />
  </svg>
);
export const PDF = () => (
  <Card sx={{ maxWidth: 303 }}>
    <CardOverflow>
      <AspectRatio
        componentsProps={{
          content: {
            sx: {
              background:
                'linear-gradient(180deg, #FFFFFF 0%, #F6F6F9 121.48%)',
            },
          },
        }}
      >
        <Box>
          <PdfFile />
        </Box>
      </AspectRatio>
    </CardOverflow>
    <Box sx={{ display: 'flex', alignItems: 'flex-start', pt: 2 }}>
      <Box sx={{ flex: 1 }}>
        <Typography fontWeight="md">File name</Typography>
        <Typography level="smallText">PNG - 2500x3209 - 2.3MB</Typography>
      </Box>
      <Chip variant="badge" color="neutral">
        File
      </Chip>
    </Box>
  </Card>
);

const FileError = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="32"
    viewBox="0 0 24 32"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.3053 8.1179L16.3895 0.741053C15.9474 0.269474 15.3474 0 14.7474 0H2.33684C1.70526 0 1.13684 0.269474 0.694737 0.741053C0.252632 1.21263 0 1.81895 0 2.49263V29.5074C0 30.8884 1.04211 32 2.33684 32H21.6632C22.9579 32 24 30.8884 24 29.5074V9.86947C24 9.22947 23.7474 8.58947 23.3053 8.1179ZM21.9789 8.72421H16.8632C16.2947 8.72421 15.8211 8.21895 15.8211 7.61263V2.18947L21.9789 8.72421ZM21.6632 30.5516H2.33684C1.8 30.5516 1.35789 30.08 1.35789 29.5074V2.49263C1.35789 2.22316 1.45263 1.95368 1.64211 1.75158C1.83158 1.54947 2.08421 1.44842 2.33684 1.44842H14.4632V7.61263C14.4632 9.02737 15.5368 10.1726 16.8632 10.1726H22.6421V29.5074C22.6421 30.08 22.2 30.5516 21.6632 30.5516ZM10.4766 19.7344L6.51172 23.6992C6.2326 23.9783 6.2326 24.4435 6.51172 24.7227C6.79084 25.0018 7.25604 25.0018 7.53517 24.7227L11.5 20.7578L15.4648 24.7227C15.744 25.0018 16.2092 25.0018 16.4883 24.7227C16.7674 24.4435 16.7674 23.9783 16.4883 23.6992L12.5234 19.7344L16.7229 15.5349C17.002 15.2558 17.002 14.7906 16.7229 14.5115C16.4438 14.2324 15.9553 14.2556 15.6762 14.5347L11.5 18.7109L7.3238 14.5347C7.04468 14.2556 6.55622 14.2324 6.2771 14.5115C5.99798 14.7906 5.99798 15.2558 6.2771 15.5349L10.4766 19.7344Z"
      fill="#D02B20"
    />
  </svg>
);
export const ErrorRequest = () => (
  <React.Fragment>
    <Card color="danger" sx={{ maxWidth: 180 }}>
      <CardOverflow>
        <AspectRatio
          componentsProps={{ content: { sx: { bgcolor: 'danger.softBg' } } }}
        >
          <div>
            <FileError />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', pt: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography fontWeight="md">File name</Typography>
          <Typography level="smallText">PNG - 2500x3209 - 2.3MB</Typography>
        </Box>
        <Chip variant="badge" color="neutral">
          File
        </Chip>
      </Box>
    </Card>
    <Typography color="danger" mt={0.5}>
      Bad request
    </Typography>
  </React.Fragment>
);
