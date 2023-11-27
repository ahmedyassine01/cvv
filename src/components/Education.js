// src/components/Education.js
import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap } from 'react-icons/fa';

const Section = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #3498db;
`;

const Content = styled.div`
  h2 {
    margin-bottom: 10px;
    color: #2c3e50;
  }
  p {
    color: #34495e;
  }
`;

const Education = () => {
  return (
    <Section>
      <Icon>
        <FaGraduationCap />
      </Icon>
      <Content>
        <h2>Education</h2>
        <p>Bachelore degree and
            Student in GoMyCode
        </p>
      </Content>
    </Section>
  );
};

export default Education;


