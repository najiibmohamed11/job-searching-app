import React from 'react';
import styled from 'styled-components';
import Headers  from '../Header/Header';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  max-width: 800px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #A855F7 ;

  margin-bottom: 1rem;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Title>About Man</Title>
      <Description>
        Man is a leading job search platform dedicated to connecting job seekers with their dream jobs and helping employers find the best talent. Our mission is to make the job search process easier, faster, and more efficient for everyone involved.
      </Description>
      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <SectionContent>
          At Man, we strive to create a seamless and user-friendly experience for job seekers and employers alike. Our advanced search algorithms and comprehensive job listings ensure that users can find the most relevant opportunities and make informed decisions about their careers.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Our Vision</SectionTitle>
        <SectionContent>
          We envision a world where job seekers can easily find the right opportunities that match their skills and aspirations, and where employers can efficiently connect with top talent. By leveraging cutting-edge technology and innovative solutions, we aim to transform the job search landscape.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <SectionContent>
          Integrity, innovation, and inclusivity are at the core of everything we do. We believe in providing a transparent and equitable platform for all users, fostering a culture of continuous improvement, and embracing diversity in all its forms.
        </SectionContent>
      </Section>
      
    </AboutContainer>
  );
};

export default AboutPage;
