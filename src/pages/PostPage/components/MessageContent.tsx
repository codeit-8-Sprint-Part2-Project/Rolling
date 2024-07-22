import { convertFromRaw, Editor, EditorState } from "draft-js";
import { useCallback, useEffect, useState } from "react";

function MessageContent({ rawString }: { rawString: string }) {

    const getContent = useCallback ((rawString: string) => {
        const parsedString = JSON.parse(rawString);
        const content = convertFromRaw(parsedString);

        return content;
    }, [])

    const [editorState, setEditorState] = useState<EditorState>(EditorState.createWithContent(getContent(rawString)));

    useEffect(() => {
        setEditorState(EditorState.createWithContent(getContent(rawString)));
    }, [rawString, getContent])

    return <Editor editorState={editorState} onChange={setEditorState} readOnly={true} />
}

export default MessageContent;