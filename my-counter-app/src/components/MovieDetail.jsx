import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  text-align: center;
`;

const BackLink = styled(Link)`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  background-color: #28a745;
  color: white;
  border-radius: 5px;
`;

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b3b1d03983f568c9360abc6962677586`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <Container>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <BackLink to="/medium">Back to Movie Search</BackLink>
    </Container>
  );
}

export default MovieDetail;
