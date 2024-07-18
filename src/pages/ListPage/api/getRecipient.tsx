const BASE_URL: string = "https://rolling-api.vercel.app/8-1/recipients/";

interface Recipient {
    id: number;
    name: string;
    backgroundColor: string;
    backgroundImageURL: string | null;
    createdAt: string;
    messageCount: number;
    recentMessages: any[];
    reactionCount: number;
    topReactions: any[];
}

interface ApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Recipient[];
}

async function getRecipient() {
    let allRecipients: Recipient[] = [];
    let offset = 0;
    const limit = 8;
    let hasNextPage = true;

    while (hasNextPage) {
        const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
        if (!response.ok) throw new Error("데이터를 불러오는데 실패했습니다.");
        const result: ApiResponse = await response.json();

        allRecipients = allRecipients.concat(result.results);

        offset += limit;
        hasNextPage = !!result.next;
    }

    return { results: allRecipients };
}

export default getRecipient;
