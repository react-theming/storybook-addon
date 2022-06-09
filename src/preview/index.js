import React from 'react';
import { addDecorator } from '@storybook/react';
import { createDecorator, setParameters } from '@storybook/addon-devkit';
import '../config';
import { handleOnSwitch, onThemeSwitchDefault } from './onThemeSwitch';
import { defaultSnippet } from '../utils/default';

const DecoratorUI = ThemeProvider => ({
  getStory,
  theme,
  themeInd,
  onThemeSwitch,
}) => {
  React.useEffect(() => {
    handleOnSwitch({ theme, onThemeSwitch });
  }, [themeInd]);
  return <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>;
};

const withData = (ThemeProvider, { providerFn, onThemeSwitch }) => {
  let CurrentThemeProvider = ThemeProvider;
  if (providerFn) {
    CurrentThemeProvider = ({ theme, children }) => (
      <>{providerFn({ theme, children })}</>
    );
  }
  return createDecorator({
    theme: store => store.themesList[store.currentTheme || 0],
    themeInd: store => store.currentTheme,
    onThemeSwitch: () => onThemeSwitch,
  })(DecoratorUI(CurrentThemeProvider), { isGlobal: true });
};

export const withThemes = (
  ThemeProvider,
  themesList,
  {
    providerFn,
    onThemeSwitch = onThemeSwitchDefault,
    fieldSnippetFn = defaultSnippet,
  } = {},
) =>
  withData(ThemeProvider, { providerFn, onThemeSwitch })({
    themesList,
    currentTheme: null,
    fieldSnippetFn,
  });

export const toThemes = setParameters();

export const useThemes = (...args) => {
  addDecorator(withThemes(...args));
  return toThemes;
};
