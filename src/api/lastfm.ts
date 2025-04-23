import { api } from "../lib/axios";

export interface TrackResponse {
    track: {
        album: {
            mbid: string,
            "#text": string
        },
        artist: {
            mbid: string,
            "#text": string
        },
        date: {
            uts: string,
            "#text": string
        },
        image: [{
            "#text": string,
            size: string
        }],
        mbid: string,
        name: string,
        streamable: string,
        url: string
    }
}

export interface getRecentTracksResponse {
    recenttracks: {
        track: [{
            artist: {
                mbid: string,
                "#text": string
            },
            streamable: string,
            image: [{
                "#text": string,
                size: string
            }],
            mbid: string,
            name: string,
            url: string,
            date: {
                uts: string,
                "#text": string
            }
        }]
    }
}

export async function getRecentTracks() {
    try {
        const response = await api.get<TrackResponse>('');
        console.log('Last.fm data:', response.data);
        
        return response.data;
    } catch (error) {
        console.error('Err while fetching Last.fm data:', error);
        throw error;
    }
}