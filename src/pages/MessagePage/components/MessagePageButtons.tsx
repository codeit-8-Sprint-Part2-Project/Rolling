import { useNavigate } from "react-router-dom";

type props = {
    recipientId: string,
}

function MessagePageButtons({ recipientId }: props) {

    const navigate = useNavigate();
    
    const handleBackButtonClick = (evt:any) => {
        evt.preventDefault();
        navigate(`/post/${recipientId}`);
    }

    return(
        <div className="flex gap-4 w-full my-3">
            <button className="w-full h-14 rounded-md border-none bg-[#9935FF] text-white text-base font-normal hover:bg-[#861DEE]">
                생성하기
            </button>
            <button
                className="w-full h-14 rounded-md border border-solid border-[#9935FF] bg-[#FFFFFF] text-[#861DEE] text-base font-normal hover:border-[#861DEE] hover:bg-[#F8F0FF] hover:text-[#9935FF]"
                onClick={handleBackButtonClick}
            >
                뒤로
            </button>
        </div>
    )
}

export default MessagePageButtons;