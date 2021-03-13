import React from 'react';
import { addDecorator } from '@storybook/react';
import { createDecorator, setParameters } from '@storybook/addon-devkit';
import '../config';
import { handleOnSwitch, onThemeSwitchDefault } from './onThemeSwitch';

const DecoratorUI = ThemeProvider => ({
  context,
  getStory,
  theme,
  themeInd,
  onThemeSwitch,
}) => {
  React.useEffect(() => {
    handleOnSwitch({ theme, onThemeSwitch });
  }, [themeInd]);
  return <ThemeProvider theme={theme}>{getStory(context)}</ThemeProvider>;
};

const withData = (ThemeProvider, { providerFn, onThemeSwitch }) => {
  let CurrentThemeProvider = ThemeProvider;
  if (providerFn) {
    CurrentThemeProvider = ({ theme, children }) => (
      <>{providerFn({ theme, children })}</>
    );
  }
  return createDecorator({
    theme: store => store.themesList[store.currentTheme],
    themeInd: store => store.currentTheme,
    onThemeSwitch: () => onThemeSwitch,
  })(DecoratorUI(CurrentThemeProvider), { isGlobal: true });
};

export const withThemes = (
  ThemeProvider,
  themesList,
  { providerFn, onThemeSwitch = onThemeSwitchDefault } = {},
) =>
  withData(ThemeProvider, { providerFn, onThemeSwitch })({
    themesList,
    currentTheme: 0,
  });

export const toThemes = setParameters();

export const useThemes = (...args) => {
  addDecorator(withThemes(...args));
  return toThemes;
};
