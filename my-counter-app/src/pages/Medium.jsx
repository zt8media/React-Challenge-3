import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Medium = () => {
  const [movies, setMovies] = useState([]);

  return (
    <Container>
      <SearchBar setMovies={setMovies} />
      <MovieList movies={movies} />
    </Container>
  );
}

export default Medium;
