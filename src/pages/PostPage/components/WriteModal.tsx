import { useState } from "react";
import MyEditor from "./MyEditor";
import { EditorState } from "draft-js";

function WriteModal({ id }: {id?: number}) {

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    return (
        <div className="bg-black/50 flex justify-center items-center fixed inset-0 z-50">
            <form className="w-[48rem] h-[56rem] bg-white rounded-2xl p-8 flex flex-col relative">
                <MyEditor editorState={editorState} onChange={setEditorState} />
                <div className="w-full flex justify-between gap-4 px-8">
                    <button className="w-full h-14 rounded-md border-none bg-[#9935FF] text-white text-base font-normal hover:bg-[#861DEE]">
                        보내기
                    </button>
                    <button className="w-full h-14 rounded-md border border-solid border-[#9935FF] bg-[#FFFFFF] text-[#861DEE] text-base font-normal hover:border-[#861DEE] hover:bg-[#F8F0FF] hover:text-[#9935FF]">
                        취소
                    </button>
                </div>
            </form>
        </div>
    )
}

export default WriteModal;