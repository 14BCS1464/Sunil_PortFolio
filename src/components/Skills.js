import React from "react";
import styled from "styled-components";
import { DiJavascript, DiReact, DiNodejs, DiHtml5, DiCss3 } from "react-icons/di";
import { FaSwift, FaAndroid, FaApple, FaDatabase } from "react-icons/fa";
import { SiKotlin, SiDart, SiRedux, SiGraphql, SiFirebase, SiExpress } from "react-icons/si";

// Styled Components
const Section = styled.section`
  padding: 10px 20px;
 
  
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: 2.0rem;
 
  margin-bottom: 40px;

  font-weight: 700;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;
const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: 0.3s;
  width: 250px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;
const SkillName = styled.h3`
  font-size: 1.2rem;

   color: #282c34;
  
`;
const ProgressBar = styled.div`
  background: #ddd;
  border-radius: 10px;
  overflow: hidden;
  height: 10px;
  width: 100%;
  margin-top: 10px;
`;
const Progress = styled.div`
  height: 100%;
  background: #0077cc;
  width: ${(props) => props.width}%;
`;

const Skills = () => {
  const skills = [
    { name: 'React Native', level: 100 },
    { name: 'JavaScript', level: 96 },
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Jest', level: 85 },
   
    { name: 'Flutter', level: 75 },

    { name: 'Titanium Appcelaretor', level: 75 },
  
    { name: 'Firebase', level: 85 },
    { name: 'Redux', level: 88 },
    { name: 'GraphQL', level: 82 },
    { name: 'Git', level: 95 },
    { name: 'AWS', level: 80 },
    { name: 'Node.js', level: 75 },
  ];

  return (
    <Section id="skills">
      <Container>
        <Title>Skills</Title>
        <Row>
          {skills.map((skill, index) => (
   
             
              <SkillName>{skill.name}</SkillName>
     
          ))}
        </Row>
      </Container>
    </Section>
  );
};

const Libraries = () => {
  const libraries = [
    { name: "Redux", icon: <SiRedux size={50} color="#764ABC" /> },
    { name: "Styled Components", icon: <DiCss3 size={50} color="#1572B6" /> },
    { name: "Express", icon: <SiExpress size={50} color="#444" /> },
    { name: "GraphQL", icon: <SiGraphql size={50} color="#E535AB" /> },
    { name: "Firebase", icon: <SiFirebase size={50} color="#FFCA28" /> },
    { name: "React Native", icon: <DiReact size={50} color="#61DBFB" /> }
  ];

  return (
    <Section id="libraries">
      <Container>
        <Title>Libraries I Use</Title>
        <Row>
          {libraries.map((lib, index) => (
            <Card key={index}>
              {lib.icon}
              <SkillName>{lib.name}</SkillName>
            </Card>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

const MediumContent = () => {
   const articles = [
    {
      "title": "Streamline Environment Management in React Native",
      "description": "Managing environment-specific configurations is a critical aspect of modern app development. With tools like react-native-dotenv and a...",
      "published_on": "Dec 31, 2024",
      "link":"https://medium.com/@Sunil_Kumar_RN/streamline-environment-management-in-react-native-e22980f0d673"
    },
    {
      "title": "Prevent Re-renders with Custom React Hook",
      "description": "When working with React applications, avoiding unnecessary re-renders can significantly improve performance. To achieve this, you can...",
      "published_on": "Jan 14, 2025",
      "link":"https://medium.com/@Sunil_Kumar_RN/prevent-re-renders-with-custom-react-hook-2b86c0f045a7"
    },
    {
      "title": "CustomTabView Component in React Native with Animated Tabs",
      "description": "In this article, we will explore how to create a customizable and animated tab view component for your React Native applications. We'll...",
      "published_on": "Nov 30, 2024",
      "link":"https://medium.com/@Sunil_Kumar_RN/customtabview-component-in-react-native-with-animated-tabs-9ed32be88843"
    },
    {
      "title": "Introducing React-Native-Layout-Responsive: A Game-Changer for Responsive UI in React Native",
      "description": "In the ever-evolving world of mobile development, crafting responsive user interfaces (UI) that adapt seamlessly across...",
      "published_on": "Nov 22, 2024",
      "link":"https://medium.com/@Sunil_Kumar_RN/introducing-react-native-layout-responsive-a-game-changer-for-responsive-ui-in-react-native-1a7ab1f88c82"
    },
    {
      "title": "Building a Reliable Internet Connectivity Checker in React Native",
      "description": "In mobile applications, network connectivity can be unpredictable, so managing it efficiently is crucial for a seamless user experience...",
      "published_on": "Nov 14, 2024",
      "link":"https://medium.com/@Sunil_Kumar_RN/building-a-reliable-internet-connectivity-checker-in-react-native-f20b77ce0d76"
    },
    {
      "title": "Creating a Reusable Zoomable Scroll View in React Native",
      "description": "Introduction",
      "published_on": "Oct 4, 2024",
      "read_time": "3 min read",
      "link":"https://medium.com/@Sunil_Kumar_RN/creating-a-reusable-zoomable-scroll-view-in-react-native-20956c59984e"
    },
    {
      "title": "Building a Bottom Sheet with Gestures in React Native (TypeScript)",
      "description": "A Bottom Sheet is a popular UI pattern used to display content that can slide up from the bottom of the screen, allowing users to view or...",
      "published_on": "Sep 8, 2024",
      "read_time": "3 min read",
       "link":"https://medium.com/@Sunil_Kumar_RN/building-a-bottom-sheet-with-gestures-in-react-native-typescript-910f987cc7b4"
    },
    {
      "title": "Boolean State Management in React Native with MMKV",
      "description": "In React Native development, managing state efficiently is key to creating responsive and reliable applications. For applications that need...",
      "published_on": "Aug 28, 2024",
      "read_time": "3 min read",
       "link":"https://medium.com/@Sunil_Kumar_RN/boolean-state-management-in-react-native-with-mmkv-2cc30899d588"
    },
    {
      "title": "Building an Instagram-Style Video Player in React Native",
      "description": "In today's social media-driven world, video content reigns supreme. Platforms like Instagram have set the standard for video consumption...",
      "published_on": "Jun 22, 2024",
      "read_time": "4 min read",
       "link":"https://medium.com/@Sunil_Kumar_RN/building-an-instagram-style-video-player-in-react-native-69cafdd5cf05"
    },
    {
      "title": "Building a Custom Video Player in React Native with Multiple Instances Control",
      "description": "Creating a custom video player in React Native can greatly enhance the user experience of your application. This article walks you through...",
      "published_on": "Jun 15, 2024",
      "read_time": "5 min read",
      "link":"https://medium.com/@Sunil_Kumar_RN/improved-custom-video-player-in-react-native-b960e094880d"
    },
    {
      "title": "CI CD for React Native (Android)",
      "description": "This line specifies the Docker image to use for the GitLab CI job. In this case, it's using the eclipse-temurin image with Java Development...",
      "published_on": "Apr 24, 2024",
      "read_time": "2 min read",
       "link":"https://medium.com/@Sunil_Kumar_RN/ci-cd-for-react-native-android-4e669115c37f"
    },
    {
      "title": "How to make the best List in React Native",
      "description": "Here are the list options which we can use",
      "published_on": "Feb 5, 2023",
      "read_time": "2 min read",
       "link":"https://medium.com/@Sunil_Kumar_RN/how-to-make-the-best-list-in-react-native-33d2639a1e35"
    },
    {
      "title": "Progressive Image Like Instagram and with Progress Bar",
      "description": "Here I try to make a Progressive image with the help of FastImage and Progress Bar in the functional component",
      "published_on": "Jan 8, 2023",
      "read_time": "2 min read",
       "link":"https://medium.com/@Sunil_Kumar_RN/progressive-image-with-using-fast-image-f873bcf53e48"
    },
    {
      "title": "How to upload image on S3 in binary from",
      "description": "Install react native FS.",
      "published_on": "Aug 12, 2020",
      "read_time": "1 min read",
       "link":"https://medium.com/@Sunil_Kumar_RN/how-to-upload-image-on-s3-in-binary-from-cb1de0138906"
    },
    {
      "title": "How to Stop Flatlist Re-rendering in React Native using Redux",
      "description": "",
      "published_on": "Dec 15, 2019",
      "read_time": "1 min read",
       "link":"https://medium.com/@Sunil_Kumar_RN/how-to-stop-flatlist-re-rendring-in-react-native-using-redux-3afb1c161f6c"
    }
  ]
  

  return (
    <Section id="medium">
      <Container>
        <Title>My Medium Articles</Title>
        <Grid>
          {articles.map((article, index) => (
            <ArticleCard key={index}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <ArticleTitle>{article.title}</ArticleTitle>
              </a>
              <ArticleDesc>{article.description}</ArticleDesc>
           
            </ArticleCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

// Additional Styles
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ArticleCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ArticleTitle = styled.h3`
  font-size: 1.2rem;
  color: #0077cc;
  transition: color 0.3s ease;

  &:hover {
    color: #005fa3;
  }
`;

const ArticleDesc = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 10px;
`;

const MetaData = styled.p`
  font-size: 0.8rem;
  color: #888;
`;

const Portfolio = () => {
  return (
    <>
      <Skills />

      <MediumContent />
    </>
  );
};

export default Portfolio;
