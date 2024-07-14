function PlusCard() {

    const plusIcon = require("../../assets/icons/plus.svg").default;

    return (
        <div className="h-[17.5rem] rounded-2xl bg-white flex justify-center items-center cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-[#555555] flex justify-center items-center text-[#FFFFFF]">
                <img src={plusIcon} alt="Plus" />
            </div>
        </div>
    )
}

export default PlusCard;