import axios from 'axios';

export default async function fethTmdbAPI(serchQuery, param = {}) {
  const API_KEY = '3e1a060e5e8ff6eb595e5a556d62f715';

  const serchConfig = {
    method: 'get',
    baseURL: 'https://api.themoviedb.org/3/',
    headers: { accept: 'application/json' },
    params: {
      api_key: API_KEY,
      ...param,
    },
  };

  const resp = await axios.get(serchQuery, serchConfig);
  return resp.data;
}
