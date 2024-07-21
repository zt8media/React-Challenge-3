import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  text-align: center;
`;

const BackLink = styled(Link)`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  background-color: #28a745;
  color: white;
  border-radius: 5px;
`;

const EditButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

function TaskDetail({ tasks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find(t => t.id === parseInt(id));

  return (
    <Container>
      {task ? (
        <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <EditButton onClick={() => navigate(`/hard/edit/${task.id}`)}>Edit Task</EditButton>
        </div>
      ) : (
        <p>Task not found</p>
      )}
      <BackLink to="/hard">Back to To-Do List</BackLink>
    </Container>
  );
}

export default TaskDetail;
