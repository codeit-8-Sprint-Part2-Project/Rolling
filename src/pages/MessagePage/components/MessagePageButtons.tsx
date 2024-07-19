function MessagePageButtons() {


    return(
        <div className="flex gap-4 w-full my-3">
            <button className="w-full h-14 rounded-md border-none bg-[#9935FF] text-white text-base font-normal hover:bg-[#861DEE]">
                생성하기
            </button>
            <button className="w-full h-14 rounded-md border border-solid border-[#9935FF] bg-[#FFFFFF] text-[#861DEE] text-base font-normal hover:border-[#861DEE] hover:bg-[#F8F0FF] hover:text-[#9935FF]">
                뒤로
            </button>
        </div>
    )
}

export default MessagePageButtons;