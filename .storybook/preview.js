import { CssVarsProvider } from '@mui/joy/styles';
import strapiTheme from '../src/strapi-theme';

const THEMES = {
  strapi: strapiTheme,
};

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  (Story, context) => {
    const themeName = context.id.split('-')[0];
    return (
      <CssVarsProvider theme={THEMES[themeName]}>
        <Story />
      </CssVarsProvider>
    );
  },
];
