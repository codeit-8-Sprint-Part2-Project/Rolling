import { Recipient } from "../../../models/recipient/Recipient";

export interface Recipients {
  count: number;
  next: string;
  previous: string;
  results: Recipient[];
}

interface GetRecipientsParams {
  team: string;
  limit?: number;
  offset?: number;
}

//apiCall
const BASE_URL = "https://rolling-api.vercel.app";

export async function getRecipients({
  team,
  limit,
  offset,
}: GetRecipientsParams) {
  const url = new URL(`${BASE_URL}/${(team = "7-4")}/recipients/`);
  if (limit) url.searchParams.append("limit", limit.toString());
  if (offset) url.searchParams.append("offset", offset.toString());

  console.log("Request URL:", url.toString()); // confirm request URL

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.status}`);
    }

    const recipients = await response.json();
    return recipients;
  } catch (error) {
    console.error("getRecipients 리퀘스트 실패:", error);
    throw error;
  }
}
