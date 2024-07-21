import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;

function TaskForm({ tasks, setTasks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      const task = tasks.find(t => t.id === parseInt(id));
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
      }
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // Editing task
      setTasks(tasks.map(t => (t.id === parseInt(id) ? { ...t, title, description } : t)));
    } else {
      // Adding new task
      setTasks([...tasks, { id: tasks.length + 1, title, description }]);
    }
    navigate('/hard');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <Button type="submit">{id ? 'Edit Task' : 'Add Task'}</Button>
    </Form>
  );
}

export default TaskForm;
