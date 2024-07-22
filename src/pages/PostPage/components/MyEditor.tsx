import { EditorState } from 'draft-js';
import React, { SetStateAction } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

type props = {
    editorState: EditorState,
    onChange: React.Dispatch<SetStateAction<EditorState>>,
}

const TOOLBAR_OPTIONS: string[] = ["inline", "blockType", "list", "textAlign", "colorPicker", "link", "emoji"];
const BLOCKTYPE_OPTIONS: string[] = ["Normal", "Blockquote", "Code"];
const LIST_OPTIONS: string[] = ["ordered", "unordered"];

function MyEditor({ editorState, onChange }: props) {

    return (
        <Editor
            wrapperClassName="wrapper-class h-[211px] mb-12"
            editorClassName="editor-class px-2 border border-solid border-[#F1F1F1] h-[211px]"
            toolbarClassName="toolbar-class"
            editorState={editorState}
            onEditorStateChange={onChange}
            toolbar={{
                options: TOOLBAR_OPTIONS,
                blockType: { options: BLOCKTYPE_OPTIONS },
                textAlign: { inDropdown: true },
                list: { options: LIST_OPTIONS },
            }}
        />
    )
}

export default MyEditor;