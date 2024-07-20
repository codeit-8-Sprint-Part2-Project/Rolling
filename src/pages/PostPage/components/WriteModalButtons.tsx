type props = {
    handleBackButtonClick: (evt: any) => void,
}

function WriteModalButtons({ handleBackButtonClick }: props) {

    return (
        <div className="w-full flex justify-between gap-4 px-8">
            <button className="w-full h-14 rounded-md border-none bg-[#9935FF] text-white text-base font-normal hover:bg-[#861DEE]">
                보내기
            </button>
            <button
                className="w-full h-14 rounded-md border border-solid border-[#9935FF] bg-[#FFFFFF] text-[#861DEE] text-base font-normal hover:border-[#861DEE] hover:bg-[#F8F0FF] hover:text-[#9935FF]"
                onClick={handleBackButtonClick}
            >
                취소
            </button>
        </div>
    )
}

export default WriteModalButtons;