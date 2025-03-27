import { api } from "../lib/axios";

const api_key = null;

export interface getRecentTracksResponse {
    recenttracks: {
        track: [
            {
                artist: {
                    mbid: string,
                    "#text": string
                },
                streamable: string,
                image: [],
                mbid: string,
                name: string,
                url: string,
                date: {
                    uts: string,
                    "#text": string
                }
            }
        ],
        "@attr": {
            user: string,
            totalPages: string,
            page: string,
            perPage: string,
            total: string
        }
    }
}

export async function getRecentTracks() {
    const response = await api.get<getRecentTracksResponse>('/', {
        params: {
            api_key,
            method: 'user.getrecenttracks',
            user: 'givfnz',
            format: 'json',
            limit: 1
        }
    })
    return response.data
}