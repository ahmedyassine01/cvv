// src/App.js
import React from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Header from './components/Header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    color: #343a40;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const MainContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <MainContent>
          <Education />
          <Experience />
          <Skills />
          <Contact />
        </MainContent>
      </Container>
    </>
  );
};

export default App;
