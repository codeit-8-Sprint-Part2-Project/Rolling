const BASE_URL: string = "https://rolling-api.vercel.app/7-5/";

async function getRecipient(id:string) {
    const response = await fetch(`${BASE_URL}recipients/${id}/`);
    if(!response.ok) throw new Error("데이터를 불러오는데 실패했습니다.");
    const result = await response.json()

    return result;
}

async function deleteMessage(messageId:number) {
    const response = await fetch(`${BASE_URL}messages/${messageId}/`, {
        method: "DELETE",
    })
    
    if(!response.ok) throw new Error("메시지 삭제에 실패했습니다.");
    const result = await response.json();

    return result;
}

export { getRecipient, deleteMessage };