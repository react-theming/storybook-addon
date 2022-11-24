import React from 'react';

import { ThemeProvider } from 'emotion-theming';

import { storiesOf } from '@storybook/react';
import { withThemes } from '../src/index.js';

import { ButtonSolid, ButtonRegular, Text, content } from './ui';
import { theme, themeAlt, darkTheme } from './theme';

const providerFn = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const onThemeSwitch = context => {
  const { theme } = context;
  const background = theme.name === 'Dark theme' ? 'pink' : 'red';
  const parameters = {
    backgrounds: null,/* {
      default: background,
    }, */
  };
  return {
    parameters,
  };
};

const getCustomValueSnippet = ({}) => {

}


storiesOf('Button', module)
  .addDecorator(
    withThemes(ThemeProvider, [theme, themeAlt, darkTheme], {
      providerFn,
      onThemeSwitch,
    }
    ),
  )
  .add('Buttons1', () => <ButtonSolid>Hello Button</ButtonSolid>)
  .add('Buttons2', () => <ButtonRegular>Hello Button</ButtonRegular>)
  .add('Buttons3', () => <Text>{content}</Text>);

storiesOf('Non themable', module).add('Component1', () => (
  <button>Component without decorator</button>
));
