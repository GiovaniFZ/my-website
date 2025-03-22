import { getRecentTracks } from "../../api/lastfm";
import { MainContainer } from "../../components/MainContent/styles";
import { useQuery } from '@tanstack/react-query'
import { Paragraph } from "../../components/Paragraph/styles";

export default function Music() {
    const { data: lastResponse } = useQuery({
        queryKey: ['song'],
        queryFn: getRecentTracks
    })
    return (
        <MainContainer>
            <h1>My Last FM Status</h1>
            <h2>Check my last played song!</h2>
            <Paragraph>{lastResponse?.recenttracks?.track[0].name} - {lastResponse?.recenttracks?.track[0].artist["#text"]}</Paragraph>
            <a href={lastResponse?.recenttracks?.track[0].url}>Check this song on LastFM</a>
        </MainContainer>
    )
}