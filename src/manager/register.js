import React from 'react';
import { register, Layout } from '@storybook/addon-devkit';
import { useTheme } from '@storybook/theming';

import {
  getTheme,
  getThemeInfoList,
  getThemeInfo,
  getSelectedValue,
  getCurrentInd,
  getSnippet,
  getSelectedWord,
  getColorSnippet,
} from '../selectors';
import SelectTheme from './components/SelectTheme';
import ThemeBrowser from './components/ThemeBrowser';

import '../config';
import ColorDetails from './components/ColorDetails';
import * as actions from '../actions';

const AddonThemingPanel = ({
  theme,
  themeInd,
  themeInfoList,
  themeInfo,
  selectedValue,
  selectedWord,
  setCurrent,
  selectValue,
  selectWord,
  changeSelectedColor,
  isFirstDataReceived,
  api,
  snippet,
  updateTheme,
}) => {
  React.useEffect(() => {
    if (themeInd === null) {
      const storedThemeInd = api.getQueryParam('themeInd');
      setCurrent(storedThemeInd || 0);
    }
  }, [themeInd]);

  const sbTheme = useTheme();
  const isSbDark = sbTheme.base !== 'light';

  return isFirstDataReceived && themeInd !== null ? (
    <Layout name="adk-tmp">
      <SelectTheme
        themeInfoList={themeInfoList}
        themeInd={themeInd}
        setCurrent={setCurrent}
      />
      <ThemeBrowser
        isSbDark={isSbDark}
        theme={theme}
        themeInfo={themeInfo}
        selectValue={selectValue}
        selectWord={selectWord}
        selectedValue={selectedValue}
        updateTheme={updateTheme}
        fieldSnippetFn={snippet}
      />
      <ColorDetails
        isSbDark={isSbDark}
        selectedValue={selectedValue}
        selectedWord={selectedWord}
        onChange={changeSelectedColor}
      />
    </Layout>
  ) : (
    <p>Waiting for data</p>
  );
};

register(
  {
    themeInfoList: getThemeInfoList,
    theme: getTheme,
    themeInfo: getThemeInfo,
    themeInd: getCurrentInd,
    selectedValue: getSelectedValue,
    selectedWord: getSelectedWord,
    snippet: getSnippet,
    colorSnippet: getColorSnippet,
  },
  ({ global }) => ({
    setCurrent: global(actions.setCurrent),
    selectValue: global(actions.selectValue),
    selectWord: global(actions.selectWord),
    changeSelectedColor: global(actions.changeSelectedColor),
    updateTheme: global(actions.changeTheme),
  }),
)(AddonThemingPanel);
