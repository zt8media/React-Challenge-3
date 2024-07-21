import React, { useState } from 'react';
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

const Button = styled.button`
  margin: 1rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
`;

const BackLink = styled(Link)`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  background-color: #28a745;
  color: white;
  border-radius: 5px;
`;

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <Container>
      <h1>Counter: {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <BackLink to="/">Back to Home</BackLink>
    </Container>
  );
}

export default Counter;
