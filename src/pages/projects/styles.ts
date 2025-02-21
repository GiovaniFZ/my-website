import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  @media(max-width: 512px){
    display: block;
  }
`;

export const ProjectCard = styled.a`
  background: ${props => props.theme["green-400"]};
  padding: 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  color: ${props => props.theme.cardText};
  box-shadow: 0 4px 6px ${props => props.theme.cardShadow};
  transition: transform 0.2s;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
  }
  @media(max-width: 512px){
    display: block;
    margin-bottom: 1rem;
  }
`;

export const ProjectName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  @media(max-width: 512px){
    font-size: 1.3rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
`;

export const ProjectLanguage = styled.span`
  font-weight: bold;
`;

export const ProjectStars = styled.span`
  color: ${props => props.theme.highlight};
`;