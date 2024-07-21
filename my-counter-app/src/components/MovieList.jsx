import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const MovieLink = styled(Link)`
  margin: 0.5rem 0;
  padding: 1rem;
  text-decoration: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
`;

const BackLink = styled(Link)`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  background-color: #28a745;
  color: white;
  border-radius: 5px;
`;

function MovieList({ movies }) {
  return (
    <Container>
      <Title>Movie Search</Title>
      <Description>Search for your favorite movies and click on a movie title to see more details.</Description>
      {movies.map(movie => (
        <MovieLink key={movie.id} to={`/medium/movie/${movie.id}`}>
          {movie.title}
        </MovieLink>
      ))}
      <BackLink to="/">Back to Home</BackLink>
    </Container>
  );
}

export default MovieList;
