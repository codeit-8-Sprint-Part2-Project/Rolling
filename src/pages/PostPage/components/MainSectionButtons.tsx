type props = {
    handleEditButtonClick: () => void;
    handleBackButtonClick: () => void;
    isDeletionPending: boolean;
    whatsButtonText: () => string;
}

function MainSectionButtons({ handleEditButtonClick, handleBackButtonClick, isDeletionPending, whatsButtonText }: props) {

    return (
        <>
            <div className="flex justify-between gap-2 absolute right-6 top-[-3.125rem]">
                <button
                    className="w-[5.75rem] h-10 rounded-md border border-solid border-[#9935FF] bg-[#FFFFFF] text-[#861DEE] text-base font-normal max-[1200px]:hidden hover:border-[#861DEE] hover:bg-[#F8F0FF] hover:text-[#9935FF]"
                    onClick={handleBackButtonClick}
                    disabled={isDeletionPending}
                >
                    목록으로
                </button>
                <button
                    className="w-[5.75rem] h-10 rounded-md border-none bg-[#9935FF] text-white text-base font-normal max-[1200px]:hidden hover:bg-[#861DEE]"
                    onClick={handleEditButtonClick}
                    disabled={isDeletionPending}
                >
                    {whatsButtonText()}
                </button>
            </div>
            <div className="w-full fixed bottom-6 px-6 flex justify-between gap-4 min-[1201px:hidden]">
                <button
                    className="w-full h-14 rounded-md border border-solid border-[#9935FF] bg-[#FFFFFF] text-[#861DEE] text-base font-normal min-[1201px]:hidden hover:border-[#861DEE] hover:bg-[#F8F0FF] hover:text-[#9935FF]"
                    onClick={handleBackButtonClick}
                    disabled={isDeletionPending}
                >
                    목록으로
                </button>
                <button
                    className="w-full h-14 rounded-md border-none bg-[#9935FF] text-white text-base font-normal min-[1201px]:hidden hover:bg-[#861DEE]"
                    onClick={handleEditButtonClick}
                    disabled={isDeletionPending}
                >
                    {whatsButtonText()}
                </button>
            </div>
        </>
    )
}

export default MainSectionButtons