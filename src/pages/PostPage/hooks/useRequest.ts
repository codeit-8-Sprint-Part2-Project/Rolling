import { useCallback, useState } from "react";
import { MessageCreate } from "../../../DTO/message/MessageCreate";

function useRequest() {
    const [isPending, setIsPending] = useState<boolean>(false);

    const wrappedRequest = useCallback (async (method: any, id: number | string, body?: MessageCreate) => {
        try {
            setIsPending(true);
            return body ? await method(id, body) : await method(id);
        } catch(e: any) {
            alert(`useRequest에서 출력하는 오류: ${e.message}`);
        } finally {
            setIsPending(false);
        }
    }, [])

    return { isPending, wrappedRequest };
}

export default useRequest;