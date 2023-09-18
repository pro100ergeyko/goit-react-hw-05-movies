import axios from 'axios';

export default async function fethTmdbAPI(serchQuery, parametr = {}) {
  const API_KEY = '3e1a060e5e8ff6eb595e5a556d62f715';
  // API Read Access Token - eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTFhMDYwZTVlOGZmNmViNTk1ZTVhNTU2ZDYyZj
  // cxNSIsInN1YiI6IjY1MDFlYzU3ZDdkY2QyMDBmZmVjNTc2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxf
  // Q.tz-APzbt_4VqGJqgmYgu3xbJHWTEhL7PShoQhlEtjYQ

  const serchConfig = {
    method: 'get',
    baseURL: 'https://api.themoviedb.org/3/',
    headers: { accept: 'application/json' },
    params: {
      api_key: API_KEY,
      ...parametr,
    },
  };

  const resp = await axios.get(serchQuery, serchConfig);
  return resp.data;
}
