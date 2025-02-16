import React from 'react';
import styled from 'styled-components';

// Styled Components
const ProjectsSection = styled.section`
  padding: 20px 20px;

  text-align: center;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.0rem;
  color: #282c34;
  margin-bottom: 40px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 20px;
`;

const ProjectCard = styled.div`
  background: linear-gradient(135deg, #ffffff, #f1f1f1);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #282c34;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
`;

const ProjectDuration = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 20px;
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background: linear-gradient(135deg, #61dafb, #4fa3c7);
  border-radius: 5px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(97, 218, 251, 0.4);
  }
`;

const Projects = () => {
  const projects = [
    {
        title: 'PlayerSpace',
        description: 'A comprehensive platform for managing youth programs, seamlessly transitioning from Titanium Appcelerator to React Native for an enhanced experience.',
        duration: 'Jan 2021 - Sep 2021 (Titanium Appcelerator), Dec 2021 - Present (React Native)',
    },
    {
        title: 'Reading Pup',
        description: 'An interactive education app designed to make learning fun and engaging for young readers.',
        duration: 'Jan 2021 - Sep 2021',
    },
    {
        title: 'Nestdel',
        description: 'An on-demand e-commerce app inspired by Blinkit, enabling seamless ordering and fast deliveries.',
        duration: 'Aug 2020 - Nov 2020',
    },
    {
        title: 'Kandigarm',
        description: 'A social promotion platform designed to boost online engagement and brand visibility.',
        duration: 'Jan 2020 - Mar 2020',
    },
    {
        title: 'Mynga',
        description: 'A job search and posting platform connecting job seekers with employers efficiently.',
        duration: 'Jul 2019 - Dec 2019',
    },
    {
        title: 'Seniority',
        description: 'An e-commerce app tailored for senior citizens, offering a seamless shopping experience with age-friendly features.',
        duration: 'Mar 2019 - Mar 2020',
    },
    {
        title: 'Book of the Home',
        description: 'A home care management app that simplifies household services and caregiving needs.',
        duration: 'Jan 2019 - Jun 2019',
    },
];


  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
      
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectDuration>Duration: {project.duration}</ProjectDuration>
            
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;