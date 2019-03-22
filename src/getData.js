import axios from 'axios';

const baseURL = 'https://demo.martian.agency/api';
const authKey = 'bWFydGlhbmFuZG1hY2hpbmU=';

const instance = axios.create({
  baseURL,
  headers: { 'X-Auth': authKey },
});

export function getData(path) {
  return instance.get(path);
}
