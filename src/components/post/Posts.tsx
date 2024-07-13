import { useEffect, useState } from "react";
import getRecipient from "./api/getRecipient";
import PlusCard from "./PlusCard";

const BACKGROUND_COLORS: {
    [index:string]: any,
} = {
    beige: "#FFE2AD",
    purple: "#ECD9FF",
    blue: "#B1E4FF",
    green: "#D0F5C3",
}

const INITIAL_VALUES = {
    backgroundColor: '',
}

function Posts({ id }: { id:string }) {
    
    const [recipient, setRecipient] = useState(INITIAL_VALUES);

    const handleLoad = async () => {
        const result = await getRecipient(id);
        setRecipient(result);
    }

    useEffect(() => {
        handleLoad();
    }, []);

    console.log(recipient);
    
    return (
        <div className={`bg-[${BACKGROUND_COLORS[recipient.backgroundColor]}] h-screen pt-[7.0625rem]`}>
            <div className="max-w-[78rem] mx-auto px-6 grid grid-cols-3 gap-x-6 gap-y-7">
                <PlusCard />
            </div>
        </div>
    )
}

export default Posts;