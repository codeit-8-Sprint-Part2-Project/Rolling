import { convertFromRaw, Editor, EditorState } from "draft-js";
import { useState } from "react";

function MessageContent({ rawString }: { rawString: string }) {

    const parsedString = JSON.parse(rawString);
    const content = convertFromRaw(parsedString);
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createWithContent(content));

    return <Editor editorState={editorState} onChange={setEditorState} readOnly={true} />
}

export default MessageContent;