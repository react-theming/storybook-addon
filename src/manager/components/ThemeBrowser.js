import React from 'react';

import * as styled from './ThemeBrowser.styled';
import Toolbar from '../UI/Toolbar';
import Caption from '../UI/Caption';
import IconButton from '../UI/IconButton';
import Text from '../UI/Text';
import { copyToClipboard } from '../../utils/clipboard';
import { initialEditors, useEditors } from '../editors/useEditors';

const showThemePath = (selectedValue, fieldSnippetFn) => {
  if (!selectedValue) return 'Select value';
  try {
    return fieldSnippetFn(selectedValue);
  } catch (err) {
    return 'try to select value';
  }
};

const ThemeBrowser = ({
  theme,
  isSbDark,
  selectValue,
  selectWord,
  selectedValue,
  updateTheme,
  fieldSnippetFn,
}) => {
  const editors = useEditors(initialEditors);

  const footerAction = showThemePath(selectedValue, fieldSnippetFn);

  const handlerChange = value => updateTheme(value.json);

  return (
    <styled.Container>
      <Toolbar>
        <Caption>Editor:</Caption>
        <styled.ButtonsEditor isDark={isSbDark}>
          {editors.editorButtons.map(btn => (
            <button
              key={btn.name}
              type="button"
              className={btn.isSelected ? 'active' : ''}
              onClick={btn.select}
            >
              {btn.title}
            </button>
          ))}
        </styled.ButtonsEditor>
      </Toolbar>
      <styled.ThemeHolder>
        {editors.renderCurrentEditor({
          isDark: isSbDark,
          theme,
          onChange: handlerChange,
          selectValue,
          selectWord,
        })}
      </styled.ThemeHolder>
      {footerAction ? (
        <Toolbar footer>
          <IconButton
            isDark={isSbDark}
            icon="copy"
            title="copy to clipboard"
            onClick={copyToClipboard(footerAction)}
          />
          <Text>{footerAction}</Text>
        </Toolbar>
      ) : null}
    </styled.Container>
  );
};

export default ThemeBrowser;
