import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const NavLink = styled(Link)`
  margin: 1rem;
  padding: 1rem 2rem;
  text-decoration: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
`;

function HomePage() {
  return (
    <Container>
      <Title>React Challenge Week 3</Title>
      <NavLink to="/easy">Easy Challenge</NavLink>
      <NavLink to="/medium">Medium Challenge</NavLink>
      <NavLink to="/hard">Hard Challenge</NavLink>
    </Container>
  );
}

export default HomePage;
