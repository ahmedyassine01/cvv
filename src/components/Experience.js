// src/components/Experience.js
import React from 'react';
import styled from 'styled-components';
import { FaBriefcase } from 'react-icons/fa';

const Section = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #e67e22;
  margin-bottom: 10px;
`;

const Content = styled.div`
  h2 {
    margin-bottom: 10px;
    color: #2c3e50;
  }
  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
  }
  strong {
    color: #3498db;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      color: #34495e;
      margin-bottom: 8px;
      &:before {
        content: '•';
        color: #e67e22;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }
  }
`;

const Experience = () => {
  return (
    <Section>
      <Icon>
        <FaBriefcase />
      </Icon>
      <Content>
        <h2>Experience</h2>
        <p>
          <strong>Online Portfolio (Personal Project)

</strong>  
        </p>
        <ul>
          <li>Developed a personal portfolio website showcasing projects, skills, and achievements using React.js.
</li>
          <li>Implemented responsive design for optimal viewing on various devices.
</li>
          
        </ul>
        <p>
          <strong>E-commerce Website (Course Project)

</strong>  
        </p>
        <ul>
          <li>Collaborated with a team to create a fully functional e-commerce website using HTML, CSS, and JavaScript.
</li>
          <li>Implemented features such as product listing, cart management, and user authentication.
</li>
          
        </ul>
      </Content>
    </Section>
  );
};

export default Experience;
