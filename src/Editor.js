// Editor.js
import React, { useState, useEffect } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import { ListNode, ListItemNode } from '@lexical/list'; // Poprawiony import
import ToolbarPlugin from './ToolbarPlugin'; // Importujemy nasz toolbar
import ExampleTheme from './ExampleTheme'; // Importujemy temat stylów
import './styles.css';






const initialConfig = {
  namespace: 'MyEditor',
  theme: ExampleTheme,
  nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode], // Dodajemy ListNode i ListItemNode
  onError: (error) => {
    console.error('Błąd edytora:', error);
  },

};



function Editor() {
function MyOnChangePlugin({ onChange }) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
      return editor.registerUpdateListener(({ editorState }) => {
        onChange(editorState);
      });
    }, [editor, onChange]);
    return null;
  }

  const [editorState, setEditorState] = useState();
  function onChange(editorState) {
    setEditorState(editorState);
  }



  return (
    <div className="editor-container">
      <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-content" />}
          placeholder={<div className="editor-placeholder">Wprowadź tekst...</div>}
        />
        <MyOnChangePlugin onChange={onChange} />

        <HistoryPlugin />
      </LexicalComposer>
      <div>
        <button onClick={MyOnChangePlugin} ></button>
      </div>

    </div>
  );

};

export default Editor;
