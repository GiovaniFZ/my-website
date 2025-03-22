import { api } from "../lib/axios";

const api_key = import.meta.env.VITE_LASTFM_API_KEY

export async function getRecentTracks() {
    const response = await api.get('/', {
        params: {
            api_key,
            method: 'user.getrecenttracks',
            user: 'givfnz',
            format: 'json'
        }
    })
    return response.data
}