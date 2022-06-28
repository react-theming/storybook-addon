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
  setCurrent,
  selectValue,
  changeSelectedColor,
  isFirstDataReceived,
  api,
  snippet,
  colorSnippet,
}) => {
  window.api = api;
  React.useEffect(() => {
    if (themeInd === null) {
      const storedThemeInd = api.getQueryParam('themeInd');
      setCurrent(storedThemeInd || 0);
    }
  }, [themeInd]);

  const sbTheme = useTheme();
  const jsTheme =
    sbTheme.base === 'light' ? 'shapeshifter:inverted' : 'codeschool';

  return isFirstDataReceived && themeInd !== null ? (
    <Layout name="adk-tmp">
      <SelectTheme
        themeInfoList={themeInfoList}
        themeInd={themeInd}
        setCurrent={setCurrent}
      />
      <ThemeBrowser
        jsTheme={jsTheme}
        theme={theme}
        themeInfo={themeInfo}
        selectValue={selectValue}
        selectedValue={selectedValue}
        fieldSnippetFn={snippet}
      />
      <ColorDetails
        colorSnippet={colorSnippet}
        jsTheme={jsTheme}
        selectedValue={selectedValue}
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
    snippet: getSnippet,
    colorSnippet: getColorSnippet,
  },
  ({ global }) => ({
    setCurrent: global(actions.setCurrent),
    selectValue: global(actions.selectValue),
    changeSelectedColor: global(actions.changeSelectedColor),
  }),
)(AddonThemingPanel);
