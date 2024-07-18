import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

interface ToastEditorProps {
  body: string;
  setBody: (body: string) => void;
}

const ToastEditor: React.FC<ToastEditorProps> = ({ body, setBody }) => {
  const editorRef = useRef<Editor>(null);

  const onChangeGetHTML = () => {
    if (editorRef.current) {
      const data = editorRef.current.getInstance().getHTML();
      setBody(data);
    }
  };

  return (
    <Editor
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task']
      ]}
      height="260px"
      initialEditType="wysiwyg"
      hideModeSwitch={true}
      previewStyle="vertical"
      ref={editorRef}
      useCommandShortcut={false}
      plugins={[colorSyntax]}
      onChange={onChangeGetHTML}
    />
  );
};

export default ToastEditor;