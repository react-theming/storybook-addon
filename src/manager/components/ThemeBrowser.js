import React from 'react';
import ReactJson from '@usulpro/react-json-view';
import YamlEditor from "@focus-reactive/react-yaml";
import { useTheme } from '@storybook/theming';

import * as styled from './ThemeBrowser.styled';
import Toolbar from '../UI/Toolbar';
import Caption from '../UI/Caption';
import IconButton from '../UI/IconButton';
import Text from '../UI/Text';
import { copyToClipboard } from '../../utils/clipboard';

const showThemePath = selectedValue => {
  if (!selectedValue) return 'select value';
  try {
    const { namespace, name } = selectedValue;
    const path = namespace.join('.');
    const fullPath = `${path}.${name}`;
    const themeProp = `\${({ theme }) => theme.${fullPath}}`;
    return themeProp;
  } catch (err) {
    return 'try to select value';
  }
};

const ThemeBrowser = ({ theme, themeInfo, selectValue, selectedValue }) => {
  const [editorYaml, setEditorYaml] = React.useState(false)
  const sbTheme = useTheme();
  const jsTheme =
    sbTheme.base === 'light' ? 'shapeshifter:inverted' : 'codeschool';
  const footerAction = showThemePath(selectedValue);

  const handlerChange = (value) => {
    console.log(value)
  };

  const testObj = {
    one: "one",
    two: "ywo",
    free: "free"
  };
  const buttonTitle = editorYaml ? "Json editor" : "Yaml editor"

  return (
    <styled.Container>
      <button onClick={() => setEditorYaml(!editorYaml)}>{buttonTitle}</button>
      <Toolbar>
        <Caption>{themeInfo.name}</Caption>
      </Toolbar>
      <styled.ThemeHolder>
        { editorYaml ?
          <YamlEditor
            json={theme}
            onChange={handlerChange}
          /> :
          <ReactJson
          src={theme}
          onSelect={selectValue}
          name={null}
          theme={jsTheme}
        />
        }
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
