// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #3498db;
  color: #fff;
  text-align: center;
  border-radius: 8px 8px 0 0;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-style: italic;
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-top: 20px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Photo src={process.env.PUBLIC_URL + 'my-photo.jpg'} alt="My Photo" />
      <Title>My CV</Title>
      
    </Wrapper>
  );
};

export default Header;
