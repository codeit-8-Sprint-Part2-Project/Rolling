import { useNavigate } from "react-router-dom";
import plusIcon from "../../../assets/icons/plus.svg";

function PlusCard({ id }: { id:string }) {

    const navigate = useNavigate();
    
    const handleCardClick = () => {
        navigate('message');
    }

    return (
        <div className="h-[17.5rem] rounded-2xl bg-white flex justify-center items-center cursor-pointer max-[1200px]:h-[17.75rem] max-md:h-[14.375rem]" onClick={handleCardClick}>
            <div className="w-14 h-14 rounded-full bg-[#555555] flex justify-center items-center text-[#FFFFFF]">
                <img src={plusIcon} alt="Plus" />
            </div>
        </div>
    )
}

export default PlusCard;