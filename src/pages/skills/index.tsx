import { MainContainer } from "../../components/MainContent/styles";
import { Paragraph } from "../../components/Paragraph/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'

export default function Skills() {
    return (
        <MainContainer>
            <h1>Skills</h1>
            <Paragraph>Hey, check some of my skills:</Paragraph>
            <FontAwesomeIcon icon={faAndroid} />
        </MainContainer>
    )
}