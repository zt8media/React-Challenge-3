import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import Counter from './components/Counter';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import TaskForm from './components/TaskForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [movies, setMovies] = useState([]);
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/easy" element={<Counter />} />
          <Route path="/medium" element={
            <>
              <SearchBar setMovies={setMovies} />
              <MovieList movies={movies} />
            </>
          } />
          <Route path="/medium/movie/:id" element={<MovieDetail />} />
          <Route path="/hard" element={
            <>
              <TaskForm setTasks={setTasks} tasks={tasks} />
              <TaskList tasks={tasks} setTasks={setTasks} />
            </>
          } />
          <Route path="/hard/task/:id" element={<TaskDetail tasks={tasks} />} />
          <Route path="/hard/edit/:id" element={<TaskForm setTasks={setTasks} tasks={tasks} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;