import { BASE_URL, KAKAO_API_KEY } from "const";

const request = async (url) => {
  const options = { headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` } };
  const response = await fetch(url, options);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
};

const kakaoApi = {
  fetchBooks(keyword) {
    return request(`${BASE_URL}/search/book?query=${keyword}`);
  }
};

export default kakaoApi;
