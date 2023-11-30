import axios from 'axios';

export type ApiItem = {
  id: any;
  snippet: any;
  kind: string;
  statistics?: any;
}

type ApiData = {
  items: ApiItem[];
  nextPageToken: string;
  pageInfo: {};
  regionCode: string;
  kind: string;
}

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get<ApiData>(`${BASE_URL}/${url}`, options);

  return data;
}