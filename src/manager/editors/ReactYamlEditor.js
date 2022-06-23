import React from 'react';
import YamlEditor from '@focus-reactive/react-yaml';
import { oneDark } from '@codemirror/theme-one-dark';

const ReactYamlEditor = ({ isDark, theme, onChange }) => {
  const ownTheme = isDark ? oneDark : undefined;
  return (
    <YamlEditor
      key={JSON.stringify(theme)}
      json={theme}
      onChange={onChange}
      theme={ownTheme}
    />
  );
};

export default ReactYamlEditor;
