import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaPhone ,FaNpm,FaMediumM} from 'react-icons/fa'; 

// Styled Components
const ContactSection = styled.section`
  padding: 20px 20px;
 
  text-align: center;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactTitle = styled.h2`
  font-size: 2.0rem;
  color: #282c34;
  margin-bottom: 10px;
`;

const ContactDetails = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 30px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
`;

const SocialLink = styled.a`
  color: #282c34;
  font-size: 2rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #61dafb;
    transform: translateY(-5px);
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle>Contact Me</ContactTitle>

        {/* Contact Details */}
        <ContactDetails>
          <FaPhone /> +91 8437513655
        </ContactDetails>
        <ContactDetails>
          <FaEnvelope /> Prajapatisunil135@gmail.com
        </ContactDetails>

        <ContactText>
          Feel free to reach out for collaborations
        </ContactText>

        {/* Social Media Links */}
        <SocialLinks>
          <SocialLink href="mailto:Prajapatisunil135@gmail.com" aria-label="Email">
            <FaEnvelope />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/sunil-kumar-75206711b/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://github.com/14BCS1464" target="_blank" aria-label="GitHub">
            <FaGithub />
          </SocialLink>
          
          <SocialLink href="https://www.instagram.com/i_sunil__kumar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialLink>
          <SocialLink href="https://medium.com/@Sunil_Kumar_RN" target="_blank" aria-label="Instagram">
            <FaMediumM />
          </SocialLink>
          <SocialLink href="https://www.npmjs.com/~shar25111996" target="_blank" aria-label="Instagram">
            <FaNpm />
          </SocialLink>
        </SocialLinks>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
