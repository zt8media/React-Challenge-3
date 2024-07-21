import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;

function SearchBar({ setMovies }) {
  const [query, setQuery] = useState('');

  const searchMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b3b1d03983f568c9360abc6962677586&query=${query}`);
    setMovies(response.data.results);
  };

  return (
    <Container>
      <Input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <Button onClick={searchMovies}>Search</Button>
    </Container>
  );
}

export default SearchBar;
