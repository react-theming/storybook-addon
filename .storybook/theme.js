const colors = {
  white: '#ffffff',
  whiteTransparent: 'rgba(255, 255, 255, 0.5)',
  blackTransparent: '#e8eae8',
  accent1: '#d2093b',
  accent2: '#252525',
  accent3: '#c2c8cb',
  accent4: '#044e7c',
  accent5: '#ac924d',
  accent6: '#e0a8b4',
  accent7: '#425550',
  accent8: '#8b8b6b',
  accent9: '#9c0935',
};

const media = {
  md: '@media (max-width: 767px)',
  sm: '@media (max-width: 499px)',
};

export const theme = {
  name: 'Light theme 1',
  palette: {
    colors,
  },
  media,
};

export const themeAlt = {
  ...theme,
  name: 'Light theme 2',
  palette: {
    colors: {
      white: '#ffffff',
      whiteTransparent: 'rgba(255, 255, 255, 0.5)',
      blackTransparent: '#fcfcfc',
      accent1: '#3bd9d6',
      accent2: '#0a8997',
      accent3: '#292b2c',
      accent4: '#7c0435',
      accent5: '#ac924d',
      accent6: '#e0a8b4',
      accent7: '#6cb09e',
      accent8: '#8b8b6b',
      accent9: '#1f595f',
      textRed: 'orange',
    },
  },
};

export const darkTheme = {
  ...theme,
  name: 'Dark theme',
  palette: {
    colors: {
      white: '#d7d4d4',
      whiteTransparent: 'rgba(255, 255, 255, 0.5)',
      blackTransparent: '#707270',
      accent1: '#46496c',
      accent2: '#c7c7cb',
      accent3: '#c2c8cb',
      accent4: '#044e7c',
      accent5: '#ac924d',
      accent6: '#e0a8b4',
      accent7: '#425550',
      accent8: '#8b8b6b',
      accent9: '#9c0935',
      bgGrey: '#888888',
      textRed: '#Fd1500',
    },
  },
};
