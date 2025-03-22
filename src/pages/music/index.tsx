import { getRecentTracks } from "../../api/lastfm";
import { MainContainer } from "../../components/MainContent/styles";
import { useQuery } from '@tanstack/react-query'
import { Paragraph } from "../../components/Paragraph/styles";
import { useTranslation } from "react-i18next";


export default function Music() {
    const { t } = useTranslation()
    const { data: lastResponse } = useQuery({
        queryKey: ['song'],
        queryFn: getRecentTracks
    })
    return (
        <MainContainer>
            <h1>{t("myLast")}</h1>
            <h2>{t("myLastDescription")}</h2>
            <Paragraph>{lastResponse?.recenttracks?.track[0].name} - {lastResponse?.recenttracks?.track[0].artist["#text"]}</Paragraph>
            <a href={lastResponse?.recenttracks?.track[0].url}>{t("lastLink")}</a>
        </MainContainer>
    )
}