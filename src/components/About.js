import React from 'react';
import styled from 'styled-components';
import { FaCode, FaReact, FaCoffee, FaDownload, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import profileImage from '../assets/images/profile.jpg';
// Styled Components
const AboutSection = styled.section`
padding: 20px 20px;

text-align: center;
`;


const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const AboutCard = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 500px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ProfileImage = styled.img`
width: 250px;  // Increased from 150px
  height: 250px; // Increased from 150px
  border-radius: 50%;
  margin-bottom: 20px;
  border: 4px solid #61dafb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  object-fit: cover; // Added to ensure image covers the area properly
  object-position: center; // Ensures the image is centered
`;

const AboutTitle = styled.h2`
  font-size: 1.5rem;
  color: #282c34;
  margin-bottom: 20px;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #61dafb;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #61dafb;
  color: white;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;
  margin-top: 20px;

  &:hover {
    background: #4fa3c7;
    transform: translateY(-3px);
  }
`;

const SectionContainer = styled.div`
  margin-top: 10px;
  text-align: left;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 5px 0;
`;

// Experience Data
const experienceData = [
  {
    title: 'Senior Software Engineer',
    company: 'Daxko',
    duration: 'Jul 2023 - Present · 1 yr 8 mos',
    location: 'Noida, Uttar Pradesh, India · Hybrid',
    skills: 'Appcelerator, Flutter, +2 skills',
  },
  {
    title: 'React Native Developer',
    company: 'GlobalLogic',
    duration: 'Dec 2020 - Jul 2023 · 2 yrs 8 mos',
    location: 'Noida, Uttar Pradesh, India',
    skills: 'Appcelerator, React Native, +2 skills',
  },
  {
    title: 'React Native Developer',
    company: 'Meta Design',
    duration: 'Jul 2020 - Dec 2020 · 6 mos',
    location: 'Gurgaon, Haryana, India',
    skills: 'React Native and Git',
  },
  {
    title: 'React Native Developer',
    company: 'Appinventiv',
    duration: 'Jan 2018 - Jul 2020 · 2 yrs 7 mos',
    location: 'Noida Area, India',
    skills: 'React Native and Git',
  },
];

// Education Data
const educationData = [
  {
    degree: 'B.Tech/B.E. Computers',
    school: 'Chandigarh University, Mohali',
    year: '2018, Full Time',
  },
  {
    degree: 'Class XII',
    school: 'Punjab (English)',
    year: '2012',
  },
  {
    degree: 'Class X',
    school: 'Punjab (English)',
    year: '2014',
  },
];

const About = () => {
  return (
    <AboutSection id="about">
        <SectionContainer>
      <AboutTitle>About Me</AboutTitle>

      {/* Profile Image */}

      <AboutContainer>
        <AboutCard>
        <ProfileImage src={profileImage}  />
  
       
          <AboutText>
            I am a seasoned <strong>React Native developer</strong> with <strong>seven years of experience</strong>, specializing in building high-performance, scalable, and user-friendly mobile applications.
          </AboutText>
          <AboutText>
            Throughout my career, I have worked on a diverse range of projects, from startups to enterprise-level applications, gaining deep expertise in mobile app development, UI/UX optimization, and cross-platform solutions.
          </AboutText>
          <AboutText>
            I have successfully navigated various challenges, including performance optimization, third-party integrations, state management, and adapting to ever-evolving technologies.
          </AboutText>
          <AboutContainer style={{ display: 'flex', flexDirection: 'column' }}>
  <div style={{ alignSelf: 'flex-start' }}>
    <AboutText>
      <strong>My expertise includes</strong>
      <ul>
        <li>React Native & JavaScript/TypeScript for building robust applications.</li>
        <li>Redux, Context API, and MobX for efficient state management.</li>
        <li>Native Modules & Bridges for integrating platform-specific features.</li>
        <li>RESTful APIs & GraphQL for seamless backend communication.</li>
        <li>Firebase, AWS, and cloud services for scalable backend solutions.</li>
        <li>Push Notifications, Deep Linking, and App Store Deployment.</li>
      </ul>
    </AboutText>
  </div>
</AboutContainer>
          <AboutText>
            I have experience working in <strong>agile environments</strong>, collaborating with designers, backend developers, and product managers to deliver high-quality applications.
          </AboutText>
          <AboutText>
            I am passionate about staying updated with industry trends and continuously improving my skills to develop innovative solutions that enhance user experiences.
          </AboutText>
          <AboutText>
            Whether it's developing a new app from scratch, optimizing an existing one, or solving complex technical issues, I thrive on challenges and delivering results.
          </AboutText>
       

          {/* Download Resume Section */}
          <ResumeButton href="https://drive.google.com/file/d/1SrqkxV-tIoEF9QY6RqLQNWyrVjZGN1J3/view?usp=sharing" download>
            <FaDownload /> Download Resume
          </ResumeButton>

          <IconContainer>
            <Icon>
              <FaCode />
            </Icon>
            <Icon>
              <FaReact />
            </Icon>
            <Icon>
              <FaCoffee />
            </Icon>
          </IconContainer>
        </AboutCard>
      </AboutContainer>
      </SectionContainer>
      {/* Experience Section */}
      <SectionContainer>
        <AboutTitle>Experience</AboutTitle>
        {experienceData.map((job, index) => (
          <Card key={index}>
            <SectionTitle>
              <FaBriefcase /> {job.title}
            </SectionTitle>
            <SectionText><strong>{job.company}</strong></SectionText>
            <SectionText>{job.duration}</SectionText>
            <SectionText>{job.location}</SectionText>
            <SectionText><strong>Skills:</strong> {job.skills}</SectionText>
          </Card>
        ))}
      </SectionContainer>

      {/* Education Section */}
      <SectionContainer>
        <AboutTitle>Education</AboutTitle>
        {educationData.map((edu, index) => (
          <Card key={index}>
            <SectionTitle>
              <FaGraduationCap /> {edu.degree}
            </SectionTitle>
            <SectionText><strong>{edu.school}</strong></SectionText>
            <SectionText>{edu.year}</SectionText>
          </Card>
        ))}
      </SectionContainer>
    </AboutSection>
  );
};

export default About;
