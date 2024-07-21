import { useState } from "react";
import { MessageRetrieve } from "../../../DTO/message/MessageRetrieve";
import { putMessage } from "../api/api";
import { MessageCreate } from "../../../DTO/message/MessageCreate";

function useSubmitMethodPicker(message: MessageRetrieve | undefined) {
    const [isPostPending, setIsPostPending] = useState<boolean>(false);

    const submitMethod = message
        ? putMessage
        : postMessage;

    const handleSubmit = async (id: string, body: MessageCreate) => {
        try {
            setIsPostPending(true);
            submitMethod(id, body);
        } catch(e: any) {
            alert(e.message);
        } finally {
            setIsPostPending(false);
        }
    }
    
    return { isPostPending, handleSubmit };
}

export default useSubmitMethodPicker;