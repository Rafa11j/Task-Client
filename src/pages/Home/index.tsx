import React, { useState, useCallback, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Container, PageHeader, Content, Button } from './styles';
import api from '../../services/api';

import EmptyData from '../../components/EmptyData';
import TaskList from '../../components/TaskList';
import ITaskList from '../../interfaces/taskList';

const Home: React.FC = () => {
  const [taskList, setTaskList] = useState<ITaskList[]>([]);

  const loadTasksList = useCallback(async () => {
    try {
      const response = await api.get('/tasks');
      setTaskList(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    loadTasksList();
  }, [loadTasksList]);

  return (
    <>
      <Container>
        <PageHeader>
          <h2>Minhas Listas</h2>
          <Button>
            <FaPlus />
            Nova Lista
          </Button>
        </PageHeader>
        <Content>
          {taskList.length === 0 ? (
            <EmptyData />
          ) : (
            taskList.map(task => <TaskList key={task.id} taskList={task} />)
          )}
        </Content>
      </Container>
    </>
  );
};

export default Home;
