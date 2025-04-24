import { getRecentTracks } from "../../api/lastfm";
import { MainContainer } from "../../components/MainContent/styles";
import { useQuery } from '@tanstack/react-query'
import { Paragraph } from "../../components/Paragraph/styles";
import { useTranslation } from "react-i18next";
import { IconLink } from "../home/styles";
import { MusicDescription, MusicTitle } from "./styles";

export default function Music() {
    const { t } = useTranslation()
    const { data: lastResponse, isLoading, isError, error } = useQuery({
        queryKey: ['song'],
        queryFn: getRecentTracks,
        retry: 1,
        refetchOnWindowFocus: false
    })
    
    const isAvailable = true;
    if (isAvailable){
        const track = lastResponse?.track;
        const isCurrentlyPlaying = !track?.date?.["#text"];
        
        return (
            <MainContainer>
                <MusicTitle>{t("myLast")}</MusicTitle>
                
                {isLoading ? (
                    <Paragraph>Loading music data...</Paragraph>
                ) : isError ? (
                    <>
                        <Paragraph>Error loading music data</Paragraph>
                        <Paragraph>Error details: {error instanceof Error ? error.message : String(error)}</Paragraph>
                    </>
                ) : (
                    <>
                        <MusicDescription>
                            {isCurrentlyPlaying ? t("myLastDescription") : t("lastPlayed")}
                        </MusicDescription>
                        {track ? (
                            <>
                                <Paragraph>{track.name} - {track.artist["#text"]}</Paragraph>
                                <IconLink target="blank" href={track.url}>{t("lastLink")}</IconLink>
                                {isCurrentlyPlaying ? 
                                    <Paragraph>{t("currentlyListening")}</Paragraph>
                                    : <Paragraph>{t("lastUpdate")}{track.date?.["#text"]} UTC</Paragraph>
                                }
                            </>
                        ) : (
                            <Paragraph>{t("noRecentTracks")}</Paragraph>
                        )}
                    </>
                )}
            </MainContainer>
        )
    }
}