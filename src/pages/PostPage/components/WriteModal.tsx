import { useState } from "react";
import MyEditor from "./MyEditor";
import { EditorState } from "draft-js";

function WriteModal({ id }: {id?: number}) {

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    return (
        <div className="bg-black/50 flex justify-center items-center fixed inset-0 z-50">
            <form className="w-[48rem] h-[56rem] bg-white rounded-2xl p-8 flex flex-col relative">
                <MyEditor editorState={editorState} onChange={setEditorState} />
                <div className="w-full absolute ">
                    
                </div>
            </form>
        </div>
    )
}

export default WriteModal;