// ToolbarPlugin.js
import React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
} from 'lexical';
import {
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from '@lexical/list'; // Importujemy komendy list
import './styles.css';


const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const handleBold = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
  };

  const handleItalic = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
  };

  const handleUnderline = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
  };

  const handleHeading = (headingSize) => {
    editor.update(() => {
      editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, `h${headingSize}`);
    });
  };

  const handleBulletList = () => {
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND);
  };

  const handleNumberedList = () => {
    editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND);
  };

  const handleRemoveList = () => {
    editor.dispatchCommand(REMOVE_LIST_COMMAND);
  };

  return (
    <div className="toolbar">
      <button onClick={handleBold}><b>B</b></button>
      <button onClick={handleItalic}><i>I</i></button>
      <button onClick={handleUnderline}><u>U</u></button>
      <button onClick={() => handleHeading(1)}>H1</button>
      <button onClick={() => handleHeading(2)}>H2</button>
      <button onClick={handleBulletList}>• Lista</button>
      <button onClick={handleNumberedList}>1. Lista</button>
      <button onClick={handleRemoveList}>Usuń listę</button>
    </div>
  );
};

export default ToolbarPlugin;
