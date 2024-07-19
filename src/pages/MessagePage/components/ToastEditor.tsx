import React, { useState } from 'react';
import MyEditor from '../../PostPage/components/MyEditor';
import { EditorState } from 'draft-js';

interface ToastEditorProps {
  body: string;
  setBody: (body: string) => void;
}

const ToastEditor: React.FC<ToastEditorProps> = ({ body, setBody }) => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

  return (
    <div className="flex flex-col gap-3 w-full">
        <p className="font-bold text-2xl">내용을 입력해 주세요</p>
        <MyEditor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};

export default ToastEditor;