import React, { SetStateAction } from 'react';
import MyEditor from '../../PostPage/components/MyEditor';
import { EditorState } from 'draft-js';

interface ToastEditorProps {
  editorState: EditorState,
  onChange: React.Dispatch<SetStateAction<EditorState>>,
}

const ToastEditor: React.FC<ToastEditorProps> = ({ editorState, onChange }) => {
  
  return (
    <div className="flex flex-col gap-3 w-full">
        <p className="font-bold text-2xl">내용을 입력해 주세요</p>
        <MyEditor editorState={editorState} onChange={onChange} />
    </div>
  );
};

export default ToastEditor;