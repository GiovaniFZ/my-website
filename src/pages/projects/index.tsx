import { useEffect, useState } from 'react';
import {
  Title,
  ProjectGrid,
  ProjectCard,
  ProjectName,
  ProjectDescription,
  ProjectMeta,
  ProjectLanguage,
  ProjectStars,
} from './styles';
import { MainContainer } from '../../components/MainContent/styles';
import { t } from 'i18next';

interface Repo {
  name: string;
  description: string;
  stars: number;
  language: string;
  url: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Repo[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await fetch('/github.json');
      const projects = await response.json();
      setProjects(projects);
    }

    loadProjects();
  }, []);

  return (
    <MainContainer>
      <Title>{t("projects")}</Title>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.name} href={project.url} target="_blank" rel="noopener noreferrer">
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectMeta>
              <ProjectLanguage>{project.language}</ProjectLanguage>
              <ProjectStars>⭐ {project.stars.toLocaleString()}</ProjectStars>
            </ProjectMeta>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </MainContainer>
  );
}