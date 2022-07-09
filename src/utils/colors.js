import colorString from 'color-string';

export const isColor = str => colorString.get(str);

export const processWord = str => {
  if (!str) {
    return null;
  }
  const value = str.replace(/^['|"|`|(]|['|"|`|)|:]*$/g, '');
  if (!value) {
    return null;
  }
  return {
    name: '/* yaml */',
    type: isColor(value) ? 'color' : '',
    value,
  };
};
