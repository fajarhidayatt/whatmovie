import axios from 'axios';

const rootAPI = process.env.NEXT_PUBLIC_API;
const keyAPI = process.env.NEXT_PUBLIC_KEY;

export async function getCategories() {
  const axiosResponse = await axios.get(`${rootAPI}/genre/movie/list?${keyAPI}`);
  const { data } = axiosResponse;
  return data;
}

export async function getDetailMovie(idm: number) {
  const axiosResponse = await axios.get(`${rootAPI}/movie/${idm}?${keyAPI}`);
  const { data } = axiosResponse;
  return data;
}

export async function getVideoTrailer(idm:number) {
  const axiosResponse = await axios.get(`${rootAPI}/movie/${idm}/videos?${keyAPI}`);
  const { data } = axiosResponse;
  return data;
}

export async function getSimilarMovies(idm: number) {
  const axiosResponse = await axios.get(`${rootAPI}/movie/${idm}/similar?${keyAPI}`);
  const { data } = axiosResponse;
  return data;
}

export async function getCategoryMovies(idc: number, page = 1) {
  const axiosResponse = await axios.get(`${rootAPI}/discover/movie?${keyAPI}&with_genres=${idc}&page=${page}`);
  const { data } = axiosResponse;
  return data;
}

export async function getTrendingMovies(param: string, page = 1) {
  const axiosResponse = await axios.get(`${rootAPI}/trending/movie/${param}?${keyAPI}&page=${page}`);
  const { data } = axiosResponse;
  return data;
}

export async function getMovies(param: string, page = 1) {
  const axiosResponse = await axios.get(`${rootAPI}/movie/${param}?${keyAPI}&page=${page}`);
  const { data } = axiosResponse;
  return data;
}

export async function getResultMovies(query: string) {
  const axiosResponse = await axios.get(`${rootAPI}/search/movie?${keyAPI}&query=${query}`);
  const { data } = axiosResponse;
  return data;
}

export async function getCredits(idm: number) {
  const axiosResponse = await axios.get(`${rootAPI}/movie/${idm}/credits?${keyAPI}`);
  const { data } = axiosResponse;
  return data;
}
