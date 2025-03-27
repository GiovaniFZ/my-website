import { getRecentTracks } from "../../api/lastfm";
import { MainContainer } from "../../components/MainContent/styles";
import { useQuery } from '@tanstack/react-query'
import { Paragraph } from "../../components/Paragraph/styles";
import { useTranslation } from "react-i18next";
import { IconLink } from "../home/styles";
import { MusicDescription, MusicTitle } from "./styles";

export default function Music() {
    const { t } = useTranslation()
    const { data: lastResponse } = useQuery({
        queryKey: ['song'],
        queryFn: getRecentTracks
    })
    return (
        <MainContainer>
            <MusicTitle>{t("myLast")}</MusicTitle>
            <MusicDescription>{t("myLastDescription")}</MusicDescription>
            <Paragraph>{lastResponse?.recenttracks?.track[0].name} - {lastResponse?.recenttracks?.track[0].artist["#text"]}</Paragraph>
            <IconLink target="blank" href={lastResponse?.recenttracks?.track[0].url}>{t("lastLink")}</IconLink>
            {lastResponse?.recenttracks?.track[0]?.date?.["#text"] ?
                <Paragraph>{t("lastUpdate")}{lastResponse?.recenttracks?.track[0]?.date["#text"]} UTC</Paragraph>
                : <Paragraph>{t("currentlyListening")}</Paragraph>
            }
        </MainContainer>
    )
}