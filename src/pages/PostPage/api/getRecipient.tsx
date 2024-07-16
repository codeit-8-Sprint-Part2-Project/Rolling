const BASE_URL: string = "https://rolling-api.vercel.app/7-5/recipients/";

async function getRecipient(id: string) {
  const response = await fetch(`${BASE_URL}${id}/`);
  if (!response.ok) throw new Error("데이터를 불러오는데 실패했습니다.");
  const result = await response.json();

  return result;
}

export default getRecipient;
