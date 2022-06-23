import React, { useEffect } from 'react';
import ReactJson from '@usulpro/react-json-view';
import YamlEditor from '@focus-reactive/react-yaml';
import { useTheme } from '@storybook/theming';

import * as styled from './ThemeBrowser.styled';
import Toolbar from '../UI/Toolbar';
import Caption from '../UI/Caption';
import IconButton from '../UI/IconButton';
import Text from '../UI/Text';
import { copyToClipboard } from '../../utils/clipboard';

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
  jsTheme,
  selectValue,
  selectedValue,
  updateTheme,
  fieldSnippetFn,
}) => {
  const [editorJSON, setEditorJSON] = React.useState(true);

  const footerAction = showThemePath(selectedValue, fieldSnippetFn);

  useEffect(() => {
    if (!editorJSON && selectedValue) selectValue(null);
  }, [editorJSON, selectedValue]);

  const handlerChange = value => updateTheme(value.json);

  return (
    <styled.Container>
      <Toolbar>
        <Caption>Editor:</Caption>
        <styled.ButtonsEditor>
          <button type="button" onClick={() => setEditorJSON(true)}>
            JSON
          </button>
          <button type="button" onClick={() => setEditorJSON(false)}>
            YAML
          </button>
        </styled.ButtonsEditor>
      </Toolbar>
      <styled.ThemeHolder>
        {editorJSON ? (
          <ReactJson
            src={theme}
            onSelect={selectValue}
            name={null}
            theme={jsTheme}
          />
        ) : (
          <YamlEditor
            key={JSON.stringify(theme)}
            json={theme}
            onChange={handlerChange}
          />
        )}
      </styled.ThemeHolder>
      {footerAction ? (
        <Toolbar footer>
          <IconButton
            theme={jsTheme}
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
