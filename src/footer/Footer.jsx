import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #A855F7;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 1rem;
  text-align: center;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0.5rem 0;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Icon = styled.a`
  margin: 0 0.5rem;
  color: white;
  font-size: 1.5rem;
  &:hover {
    color: #ddd;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Man</FooterTitle>
          <FooterText>
            Man is a leading job search platform dedicated to connecting job seekers with their dream jobs and helping employers find the best talent.
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Jobs</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialMediaIcons>
            <Icon href="https://facebook.com" target="_blank" className="fab fa-facebook"></Icon>
            <Icon href="https://twitter.com" target="_blank" className="fab fa-twitter"></Icon>
            <Icon href="https://instagram.com" target="_blank" className="fab fa-instagram"></Icon>
            <Icon href="https://linkedin.com" target="_blank" className="fab fa-linkedin"></Icon>
          </SocialMediaIcons>
        </FooterSection>
      </FooterContent>
      <FooterText>&copy; 2024 Man. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
