import React from 'react';
import { addDecorator } from '@storybook/react';
import { createDecorator, setParameters } from '@storybook/addon-devkit';
import '../config';
import { handleOnSwitch, onThemeSwitchDefault } from './onThemeSwitch';
import { defaultSnippet } from '../utils/default';
import * as actions from '../actions';

const DecoratorUI = ThemeProvider => ({
  getStory,
  theme,
  themeInd,
  onThemeSwitch,
  selectedValue,
  // fnSnippetValue,
  setSnippetValue
}) => {
  console.log("render DecoratorUI");
  React.useEffect(() => {
    handleOnSwitch({ theme, onThemeSwitch });
  }, [themeInd]);
  
  
  React.useEffect(() => {
    if (selectedValue) {
      // const re =fnSnippetValue(selectedValue)
      setSnippetValue("eeee") // Если запускаю то setCurrent все обнуляет
      
      console.log("selected Value")
    }

  }, [selectedValue])

  return <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>;
};

  const withData = (ThemeProvider, { providerFn, onThemeSwitch, fnSnippetValue }) => {
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
      selectedValue: store => store.selectedValue,
      fnSnippetValue: () => fnSnippetValue
      
    }, ({ global }) => ({
      setSnippetValue: global(actions.selectSnippetValue)
    }))(DecoratorUI(CurrentThemeProvider), { isGlobal: true });
  };
  
  export const withThemes = (
    ThemeProvider,
    themesList,
    {
      providerFn,
      onThemeSwitch = onThemeSwitchDefault,
      fnSnippetValue = defaultSnippet,
      fieldSnippetFn = null,
    } = {},
  ) =>
    withData(ThemeProvider, { providerFn, onThemeSwitch, fnSnippetValue })({
      themesList,
      currentTheme: null,
      fieldSnippetFn,
      snippetValue: null,
  
    });

export const toThemes = setParameters();

export const useThemes = (...args) => {
  addDecorator(withThemes(...args));
  return toThemes;
};
