import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 20px;
  text-align: center;
  background: #282c34;
  color: white;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>&copy; 2023 My Portfolio. All rights reserved.</p>
    </FooterSection>
  );
};

export default Footer;