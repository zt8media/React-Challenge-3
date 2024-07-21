import React from 'react';
import Counter from 'my-counter-app/src/components/Counter.jsx';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Easy = () => (
  <Container>
    <Counter />
  </Container>
);

export default Easy;
