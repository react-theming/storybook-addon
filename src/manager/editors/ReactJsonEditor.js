import React from 'react';
import ReactJson from '@usulpro/react-json-view';

const ReactJsonEditor = ({ isDark, theme, selectValue }) => {
  const jsTheme = isDark ? 'codeschool' : 'shapeshifter:inverted';
  return (
    <ReactJson src={theme} onSelect={selectValue} name={null} theme={jsTheme} />
  );
};

export default ReactJsonEditor;
