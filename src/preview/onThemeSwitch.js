const LIGHT_BG = '#fff';
const DARK_BG = '#333';

const TAG_SELECTOR = 'addon-backgrounds-color';

const createStyle = color => `
.sb-show-main {
  background: ${color} !important;
  transition: background-color 0.3s;
}
`;

export const addBackgroundStyle = color => {
  const css = createStyle(color);
  const existingStyle = document.getElementById(TAG_SELECTOR);
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    const style = document.createElement('style');
    style.setAttribute('id', TAG_SELECTOR);
    style.innerHTML = css;

    document.head.appendChild(style);
  }
};

export const handleOnSwitch = ({ theme, onThemeSwitch }) => {
  const result = onThemeSwitch({ theme });
  const color = result.parameters.backgrounds.default;
  addBackgroundStyle(color);
};

export const onThemeSwitchDefault = context => {
  const { theme } = context;
  const background = /dark/i.test(theme.name) ? DARK_BG : LIGHT_BG;
  const parameters = {
    backgrounds: {
      default: background,
    },
  };
  return {
    parameters,
  };
};
