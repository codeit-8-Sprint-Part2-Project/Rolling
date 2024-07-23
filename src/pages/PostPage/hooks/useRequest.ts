import { useCallback, useState } from "react";

function useRequest() {
    const [isPending, setIsPending] = useState<boolean>(false);

    const wrappedRequest = useCallback (async (method: any, id: number | string, limit?: number, offset?: number) => {
        try {
            setIsPending(true);
            return (limit && offset) ? await method(id, limit, offset) : await method(id);
        } catch(e: any) {
            alert(`useRequest에서 출력하는 오류: ${e.message}`);
        } finally {
            setIsPending(false);
        }
    }, []);

    return { isPending, wrappedRequest };
}

export default useRequest;