import React from 'react';
import ReactJsonEditor from './ReactJsonEditor';
import ReactYamlEditor from './ReactYamlEditor';

export const initialEditors = [
  {
    name: 'json',
    title: 'JSON',
    renderComponent: props => <ReactJsonEditor {...props} />,
  },
  {
    name: 'yaml',
    title: 'YAML',
    renderComponent: props => <ReactYamlEditor {...props} />,
  },
];

export const useEditors = registeredEditors => {
  const editorNames = [...new Set(registeredEditors.map(({ name }) => name))];
  const [currentEditor, setCurrentEditor] = React.useState(editorNames[0]);

  const editorButtons = registeredEditors.map(editor => ({
    ...editor,
    isSelected: editor.name === currentEditor,
    select: () => setCurrentEditor(editor.name),
  }));

  const renderCurrentEditor = props => {
    const editor = registeredEditors.find(({ name }) => name === currentEditor);
    return editor.renderComponent(props);
  };

  return {
    editorButtons,
    renderCurrentEditor,
  };
};
