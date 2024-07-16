import TrashcanIcon from "../../../assets/icons/deleted.svg";

function TrashcanButton({ onClick }: { onClick: () => void }) {

    return (
        <button className="w-10 h-10 border border-solid border-[#CCCCCC] rounded-md bg-white flex justify-center items-center" onClick={onClick}>
            <img src={TrashcanIcon} alt="삭제" />
        </button>
    )
}

export default TrashcanButton;