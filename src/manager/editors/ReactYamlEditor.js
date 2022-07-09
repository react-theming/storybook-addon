import React from 'react';
import YamlEditor from '@focus-reactive/react-yaml';
import { oneDark } from '@codemirror/theme-one-dark';

const ReactYamlEditor = ({ isDark, theme, onChange, selectWord }) => {
  const merge = React.useCallback(({ json }) => ({ json }), []);
  const ownTheme = isDark ? oneDark : undefined;

  const handleSelectWord = ({ word }) => {
    selectWord(word);
  };

  return (
    <YamlEditor
      json={theme}
      onChange={onChange}
      onSetCursor={handleSelectWord}
      theme={ownTheme}
      merge={merge}
    />
  );
};

export default ReactYamlEditor;
