import React from 'react';

import { ThemeProvider } from 'emotion-theming';

import { storiesOf } from '@storybook/react';
import { withThemes, createTheme } from '../src/index.js';

import { ButtonSolid, ButtonRegular, Text, content } from './ui';
import { theme, themeAlt, darkTheme } from './theme';

// const setThemes = useThemes(ThemeProvider, [
//   theme,
//   // themeAlt,
//   // darkTheme,
// ]);

storiesOf('Button', module)
  .addDecorator(withThemes(ThemeProvider, [theme, themeAlt, darkTheme]))
  .add(
    'Buttons1',
    () => <ButtonSolid>Hello Button</ButtonSolid>,
    // setThemes({ currentTheme: 4 }),
  )
  .add(
    'Buttons2',
    () => <ButtonRegular>Hello Button</ButtonRegular>,
    // setThemes({ currentTheme: 3 }),
  )
  .add(
    'Buttons3',
    () => <Text>{content}</Text>,
    // setThemes({ currentTheme: 0 }),
  );

  storiesOf('Non themable', module)
  .add(
    'Component1',
    () => <button>Component without decorator</button>,
    // setThemes({ currentTheme: 4 }),
  )