import { useEffect, useState } from "react";
import getRecipient from "./api/getRecipient";

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

    const bgColor = `bg-[${BACKGROUND_COLORS[recipient.backgroundColor]}]`;

    console.log(recipient);
    
    return (
        <div className={bgColor}>테스트테스트</div>
    )
}

export default Posts;