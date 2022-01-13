import React = require('react');

export function withThemes(
  ThemeProvider: React.Component<{ theme: {}; [key: string]: any }>,
  themesList: {}[],
  {
    providerFn,
    onThemeSwitch,
  }?: {
    providerFn: React.Component<{ theme: {}; [key: string]: any }>;
    onThemeSwitch?: (
      context: any,
    ) => {
      parameters: {
        backgrounds: {
          default: string;
        };
      };
    };
  },
): unknown;

export const toThemes: <
  T extends import('@storybook/addon-devkit').AddonParameters
>(
  T: any,
) => { [key: any]: T };

export function useThemes(
  ThemeProvider: React.Component<{ theme: {}; [key: string]: any }>,
  themesList: {}[],
  {
    providerFn,
    onThemeSwitch,
  }?: {
    providerFn: React.Component<{ theme: {}; [key: string]: any }>;
    onThemeSwitch?: (
      context: any,
    ) => {
      parameters: {
        backgrounds: {
          default: string;
        };
      };
    };
  },
): typeof toThemes;
