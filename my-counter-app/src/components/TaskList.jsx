import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

const TaskLink = styled(Link)`
  margin: 0.5rem 0;
  padding: 1rem;
  text-decoration: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
`;

const Button = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
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

function TaskList({ tasks, setTasks }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <Title>To-Do List</Title>
      <Description>Click on an item to see its description.</Description>
      {tasks.map(task => (
        <div key={task.id}>
          <TaskLink to={`/hard/task/${task.id}`}>{task.title}</TaskLink>
          <Button onClick={() => navigate(`/hard/edit/${task.id}`)}>Edit</Button>
          <Button onClick={() => handleDelete(task.id)}>Delete</Button>
        </div>
      ))}
      <BackLink to="/">Back to Home</BackLink>
    </Container>
  );
}

export default TaskList;
