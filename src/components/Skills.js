// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';
import { FaCode } from 'react-icons/fa';

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
  color: #27ae60;
`;

const Content = styled.div`
  h2 {
    margin-bottom: 10px;
    color: #2c3e50;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;

    li {
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 8px;
      background-color: #ecf0f1;
      border-radius: 4px;
      color: #34495e;
    }
  }
`;

const Skills = () => {
  return (
    <Section>
      <Icon>
        <FaCode />
      </Icon>
      <Content>
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          {/* Add more skills as needed */}
        </ul>
      </Content>
    </Section>
  );
};

export default Skills;
