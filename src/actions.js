import { getCurrentInd, getSelectedValue, getTheme } from './selectors';
import { processWord } from './utils';

export const setCurrent = (store, ind, api) => {
  if (api) {
    api.setQueryParams({
      themeInd: ind,
    });
  }
  console.log("STORE", store)

  return {
    ...store,
    currentTheme: ind,
    selectedWord: null,
  };
};

export const selectSnippetValue= (store, value) => {
  console.log("selectSnippetValue", store)
  const newStore = {
    ...store,
    selectedSnippetValue: value
  }
}

export const selectValue = (store, value) => ({
  ...store,
  selectedValue: value,
  selectedWord: null,
});

export const selectWord = (store, value) => ({
  ...store,
  selectedValue: null,
  selectedWord: processWord(value),
});

export const updateTheme = (store, ind, newTheme) => {
  const { themesList } = store;
  const newThemesList = [...themesList];
  newThemesList[ind] = newTheme;
  const newStore = {
    ...store,
    themesList: newThemesList,
  };
  return newStore;
};

const mutateObj = (obj, namespace, key, value) => {
  const nestedObj = namespace.reduce((subObj, subKey) => subObj[subKey], obj);
  nestedObj[key] = value;
};

export const changeSelectedColor = (store, color) => {
  const selected = getSelectedValue(store);
  if (!selected) return store;
  const { name, namespace } = selected;
  const theme = getTheme(store);
  const ind = getCurrentInd(store);
  const themeClone = JSON.parse(JSON.stringify(theme));
  mutateObj(themeClone, namespace, name, color);
  return updateTheme(store, ind, themeClone);
};

export const changeTheme = (store, newTheme) => {
  const ind = getCurrentInd(store);
  const { themesList } = store;
  const newThemesList = [...themesList];
  newThemesList[ind] = newTheme;
  return {
    ...store,
    themesList: newThemesList,
  };
};
