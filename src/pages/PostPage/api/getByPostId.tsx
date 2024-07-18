interface Params {
  productid?: string;
}

export async function getByPostId(params: Params | null = null) {
  const { productid } = params || {};

  try {
    let url = "https://rolling-api.vercel.app/8-1/recipients/";

    if (productid) {
      url += `${productid}/`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("데이터를 불러오는데 실패했습니다.:", error);
    throw error;
  }
}
