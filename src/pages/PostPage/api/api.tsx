const BASE_URL: string = "https://rolling-api.vercel.app/8-1/";

async function getRecipient(id: string) {
    const response = await fetch(`${BASE_URL}recipients/${id}/`);
    if(!response.ok) throw new Error("데이터를 불러오는데 실패했습니다.");
    const result = await response.json();

    return result;
}

async function getMessages(id: string, limit: number = 8, offset: number = 0) {
    const response = await fetch(`${BASE_URL}recipients/${id}/messages/?limit=${limit}&offset=${offset}`);
    if(!response.ok) throw new Error("메세지를 불러오는데 실패했습니다.");
    const result = await response.json();

    return result;
}

async function deleteMessage(messageId: number) {
    const response = await fetch(`${BASE_URL}messages/${messageId}/`, {
        method: "DELETE",
    })
    
    if(!response.ok) throw new Error("메시지 삭제에 실패했습니다.");
}

async function deleteRecipient(id: string) {
    const response = await fetch(`${BASE_URL}recipients/${id}/`, {
        method: "DELETE",
    })

    if(!response.ok) throw new Error("게시판 삭제에 실패했습니다.");
}

async function postMessage(recipientId: string, formData: any) {
    const formString = JSON.stringify(formData);
    
    const response = await fetch(`${BASE_URL}recipients/${recipientId}/messages/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: formString,
    })

    if(!response.ok) throw new Error("메시지 등록에 실패했습니다.");
    const result = await response.json();

    return result;
}

async function putMessage(messageId: string, formData: any) {
    const formString = JSON.stringify(formData);
    
    const response = await fetch(`${BASE_URL}messages/${messageId}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: formString,
    })

    if(!response.ok) throw new Error("메시지 수정에 실패했습니다.");
    const result = await response.json();

    return result;
}

export { getRecipient, getMessages, deleteMessage, deleteRecipient, postMessage, putMessage };