import { getRecentTracks } from "../../api/lastfm";
import { MainContainer } from "../../components/MainContent/styles";
import { useQuery } from '@tanstack/react-query'
import { Paragraph } from "../../components/Paragraph/styles";

export default function Music() {
    const { data: lastResponse } = useQuery({
        queryKey: ['song'],
        queryFn: getRecentTracks
    })
    const { recenttracks } = lastResponse
    const { track } = recenttracks
    const lastTrack = track[0]
    return (
        <MainContainer>
            <h1>My Last FM Status</h1>
            <Paragraph>{lastTrack.name} - {lastTrack.artist["#text"]}</Paragraph>
        </MainContainer>
    )
}