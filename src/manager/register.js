import React from 'react';
import { register, Layout } from '@storybook/addon-devkit';

import {
  getTheme,
  getThemeInfoList,
  getThemeInfo,
  getSelectedValue,
  getCurrentInd,
  getSnippet,
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
  setCurrent,
  selectValue,
  changeSelectedColor,
  isFirstDataReceived,
  api,
  snippet,
  updateTheme,
}) => {
  window.api = api;

  React.useEffect(() => {
    if (themeInd === null) {
      const storedThemeInd = api.getQueryParam('themeInd');
      setCurrent(storedThemeInd || 0);
    }
  }, [themeInd]);

  return isFirstDataReceived && themeInd !== null ? (
    <Layout name="adk-tmp">
      <SelectTheme
        themeInfoList={themeInfoList}
        themeInd={themeInd}
        setCurrent={setCurrent}
      />
      <ThemeBrowser
        theme={theme}
        themeInfo={themeInfo}
        selectValue={selectValue}
        selectedValue={selectedValue}
        updateTheme={updateTheme}
        fieldSnippetFn={snippet}
      />
      {selectedValue && (
        <ColorDetails
          selectedValue={selectedValue}
          onChange={changeSelectedColor}
        />
      )}
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
    snippet: getSnippet,
  },
  ({ global }) => ({
    setCurrent: global(actions.setCurrent),
    selectValue: global(actions.selectValue),
    changeSelectedColor: global(actions.changeSelectedColor),
    updateTheme: global(actions.changeTheme),
  }),
)(AddonThemingPanel);
