import { MainContainer } from "../../components/MainContent/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faAngular, faAtlassian, faGit, faJava, faLinux, faNode, faReact, faWindows } from '@fortawesome/free-brands-svg-icons'
import { ButtonsContainer, Skill, SkillsContainer, SlideButton } from "./styles";
import { useTranslation } from "react-i18next";
import { useKeenSlider } from 'keen-slider/react'
import cLogo from '../../assets/c.svg'
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Skills() {
    const { t } = useTranslation();
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 10,
            spacing: 0,
        },
        breakpoints: {
            "(max-width: 1070px)": {
                slides: { perView: 7 }
            },
            "(max-width: 810px)": {
                slides: { perView: 5 }
            },
            "(max-width: 490px)": {
                slides: { perView: 2 }
            },
            "(max-width: 330px)": {
                slides: { perView: 1 }
            },
        }
    })
    return (
        <MainContainer>
            <h1>{t("skills")}</h1>
            <SkillsContainer ref={sliderRef} className="keen-slider">
                <Skill className="keen-slider__slide">
                    <FontAwesomeIcon size="4x" style={{ color: '#fff' }} icon={faAndroid} />
                    <p>Android</p>
                </Skill>
                <Skill className="keen-slider__slide">
                    <FontAwesomeIcon size="4x" icon={faLinux} />
                    <p>Linux</p>
                </Skill>
                <Skill className="keen-slider__slide">
                    <FontAwesomeIcon size="4x" icon={faNode} />
                    <p>Node</p>
                </Skill>
                <Skill className="keen-slider__slide">
                    <FontAwesomeIcon size="4x" icon={faReact} />
                    <p>React</p>
                </Skill>
                <Skill className="keen-slider__slide">
                    <FontAwesomeIcon size="4x" icon={faAngular} />
                    <p>Angular</p>
                </Skill>
                <Skill className="keen-slider__slide">
                    <FontAwesomeIcon size="4x" icon={faWindows} />
                    <p>Windows</p>
                </Skill>
                <Skill className="keen-slider__slide">
                    <FontAwesomeIcon size="4x" icon={faGit} />
                    <p>Git</p>
                </Skill>
                <Skill className="keen-slider__slide">
                    <FontAwesomeIcon size="4x" icon={faJava} />
                    <p>Java</p>
                </Skill>
                <Skill className="keen-slider__slide">
                    <FontAwesomeIcon size="4x" icon={faAtlassian} />
                    <p>Atlassian</p>
                </Skill>
                <Skill className="keen-slider__slide">
                    <img src={cLogo} alt="C logo" />
                    <p>C/C++</p>
                </Skill>
            </SkillsContainer>
            <ButtonsContainer>
                <SlideButton
                    onClick={() => instanceRef.current?.prev()}
                >
                    <ChevronLeft color="gray" size={48} />
                </SlideButton>
                <SlideButton
                    onClick={() => instanceRef.current?.next()}
                >
                    <ChevronRight color="gray" size={48} />
                </SlideButton>
            </ButtonsContainer>
        </MainContainer>
    )
}