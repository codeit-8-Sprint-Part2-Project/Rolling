import {Editor, EditorState} from 'draft-js';
import { useState } from 'react';

function MyEditor() {

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    return <Editor editorState={editorState} onChange={setEditorState} />
}

export default MyEditor;