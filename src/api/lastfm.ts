import { api } from "../lib/axios";

export async function getRecentTracks() {
    try {
        const response = await api.get('/latest-song');
        return response.data;
    } catch (error) {
        return error;
    }
}