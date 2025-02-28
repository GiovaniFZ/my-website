import { MainContainer } from "../../components/MainContent/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faAngular, faGit, faLinux, faNode, faReact, faWindows } from '@fortawesome/free-brands-svg-icons'
import { SkillsContainer } from "./styles";
import { useTranslation } from "react-i18next";

export default function Skills() {
    const { t } = useTranslation();
    return (
        <MainContainer>
            <h1>{t("skills")}</h1>
            <SkillsContainer>
                <FontAwesomeIcon size="2x" style={{ color: '#fff' }} icon={faAndroid} />
                <p>Android</p>
                <FontAwesomeIcon size="2x" icon={faLinux} />
                <p>Linux</p>
                <FontAwesomeIcon size="2x" icon={faNode} />
                <p>Node</p>
                <FontAwesomeIcon size="2x" icon={faReact} />
                <p>React</p>
                <FontAwesomeIcon size="2x" icon={faAngular} />
                <p>Angular</p>
                <FontAwesomeIcon size="2x" icon={faWindows} />
                <p>Windows</p>
                <FontAwesomeIcon size="2x" icon={faGit} />
                <p>Git</p>
            </SkillsContainer>
        </MainContainer>
    )
}