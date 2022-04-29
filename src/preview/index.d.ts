import { StoryFn } from '@storybook/addon-devkit';
import React from 'react';

type ThemeProviderProps<T extends {} = {}, P extends {} = {}> = {
  theme: T;
  children: React.ReactNode;
} & P;

type Opts<T extends {} = {}, P extends {} = {}> = {
  providerFn: React.FC<ThemeProviderProps<T, P>>;
  onThemeSwitch?: (context: any) => {};
};

export function withThemes<T extends {} = {}, P extends {} = {}>(
  ThemeProvider: React.ComponentType<ThemeProviderProps<T, P>>,
  themesList: {}[],
  opts: Opts<T, P>,
): ReturnType<StoryFn>;

export const toThemes: <
  T extends import('@storybook/addon-devkit').AddonParameters
>(
  _: T,
) => { [key: symbol]: T };

export function useThemes<T extends {} = {}, P extends {} = {}>(
  ThemeProvider: React.ComponentType<ThemeProviderProps<T, P>>,
  themesList: {}[],
  opts: Opts<T, P>,
): typeof toThemes;

