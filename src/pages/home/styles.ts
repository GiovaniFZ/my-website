import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const IconLink = styled.a`
  color: ${props => props.theme["light-cream"]};
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme["cream"]};
  }
`;

export const HomeLabel = styled.p`
  margin-top: 1rem;
`;