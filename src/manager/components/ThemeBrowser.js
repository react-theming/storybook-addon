import React from 'react';
import ReactJson from '@usulpro/react-json-view';
import {useTheme} from '@storybook/theming';

import * as styled from './ThemeBrowser.styled';
import Toolbar from '../UI/Toolbar';
import Caption from '../UI/Caption';
import IconButton from '../UI/IconButton';
import Text from '../UI/Text';
import {copyToClipboard} from '../../utils/clipboard';
import {
  defaultSnippet
} from "../../utils/default";

const showThemePath = (selectedValue, snippetFunc) => {
  if (!selectedValue) return 'select value';
  try {
    if (snippetFunc) return snippetFunc(selectedValue);
    return defaultSnippet(selectedValue);
  } catch (err) {
    return 'try to select value';
  }
};

const ThemeBrowser = ({ theme, themeInfo, selectValue, selectedValue, snippetFunc }) => {
  const sbTheme = useTheme();
  const jsTheme =
    sbTheme.base === 'light' ? 'shapeshifter:inverted' : 'codeschool';
  const footerAction = showThemePath(selectedValue, snippetFunc);
  return (
    <styled.Container>
      <Toolbar>
        <Caption>{themeInfo.name}</Caption>
      </Toolbar>
      <styled.ThemeHolder>
        <ReactJson
          src={theme}
          onSelect={selectValue}
          name={null}
          theme={jsTheme}
        />
      </styled.ThemeHolder>
      <Toolbar footer>
        {footerAction && (
          <IconButton
            icon="copy"
            title="copy to clipboard"
            onClick={copyToClipboard(footerAction)}
          />
        )}
        <Text>{footerAction}</Text>
      </Toolbar>
    </styled.Container>
  );
};

export default ThemeBrowser;
