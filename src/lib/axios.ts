import axios from 'axios'

const defaultApiUrl = 'https://lastfm-last-played.biancarosa.com.br/givfnz/latest-song';

export const api = axios.create({
    baseURL: import.meta.env.VITE_LASTFM_API_URL || defaultApiUrl,
})