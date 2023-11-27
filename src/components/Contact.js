// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

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
  color: #e74c3c;
`;

const Content = styled.div`
  h2 {
    margin-bottom: 10px;
    color: #2c3e50;
  }
  p {
    color: #34495e;
  }
  a {
    color: #3498db;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Contact = () => {
  return (
    <Section>
      <Icon>
        <FaEnvelope />
      </Icon>
      <Content>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:your.email@example.com">ahmedyassinechaabene87@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">https://github.com/ahmedyassine01</a></p>
      </Content>
    </Section>
  );
};

export default Contact;
