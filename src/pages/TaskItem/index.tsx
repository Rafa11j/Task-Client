import React, { useCallback, useEffect, useState } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import { store } from 'react-notifications-component';
import { FaPlus, FaReply } from 'react-icons/fa';
import {
  Container,
  Content,
  ItemsContainer,
  PageHeader,
  Button,
} from './styles';
import api from '../../services/api';
import TaskListItem from '../../components/TaskListItem';
import ITaskList from '../../interfaces/taskList';
import EmptyData from '../../components/EmptyData';

const TaskItem: React.FC = () => {
  const { id } = useParams();
  const [taskList, setTaskList] = useState<ITaskList>();
  const history = useHistory();

  const newTaskListItem = useCallback(() => {
    history.push(`/${id}/itens/cadastro`);
  }, [history, id]);

  const loadTaskList = useCallback(async () => {
    try {
      const response = await api.get(`/tasks/${id}`);
      setTaskList(response.data);
    } catch (err) {
      if (err.response !== undefined) {
        // eslint-disable-next-line array-callback-return
        err.response.data.errors.map((error: string) => {
          store.addNotification({
            title: 'Alerta!',
            message: error,
            type: 'warning',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],
            dismiss: {
              duration: 3000,
            },
          });
        });
      } else {
        store.addNotification({
          title: 'Erro!',
          message: 'Falha no servidor',
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],
          dismiss: {
            duration: 3000,
          },
        });
      }
    }
  }, [id]);

  const finishedItem = useCallback(
    async (taskItemId: string) => {
      try {
        await api.patch(`/task-item/finished/${taskItemId}`);
        loadTaskList();
      } catch (err) {
        if (err.response !== undefined) {
          // eslint-disable-next-line array-callback-return
          err.response.data.errors.map((error: string) => {
            store.addNotification({
              title: 'Alerta!',
              message: error,
              type: 'warning',
              insert: 'top',
              container: 'top-right',
              animationIn: ['animated', 'fadeIn'],
              animationOut: ['animated', 'fadeOut'],
              dismiss: {
                duration: 3000,
              },
            });
          });
        } else {
          store.addNotification({
            title: 'Erro!',
            message: 'Falha no servidor',
            type: 'danger',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],
            dismiss: {
              duration: 3000,
            },
          });
        }
      }
    },
    [loadTaskList],
  );

  const deleteItem = useCallback(
    async (taskItemId: string) => {
      try {
        await api.delete(`/task-item/${taskItemId}`);
        loadTaskList();
      } catch (err) {
        if (err.response !== undefined) {
          // eslint-disable-next-line array-callback-return
          err.response.data.errors.map((error: string) => {
            store.addNotification({
              title: 'Alerta!',
              message: error,
              type: 'warning',
              insert: 'top',
              container: 'top-right',
              animationIn: ['animated', 'fadeIn'],
              animationOut: ['animated', 'fadeOut'],
              dismiss: {
                duration: 3000,
              },
            });
          });
        } else {
          store.addNotification({
            title: 'Erro!',
            message: 'Falha no servidor',
            type: 'danger',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],
            dismiss: {
              duration: 3000,
            },
          });
        }
      }
    },
    [loadTaskList],
  );

  useEffect(() => {
    loadTaskList();
  }, [loadTaskList]);

  return (
    <Container>
      <PageHeader>
        <h2>
          Items da Lista:
          {` ${taskList?.name}`}
        </h2>
        <div>
          <Button onClick={() => history.goBack()}>
            <FaReply />
            Voltar
          </Button>
          <Button onClick={newTaskListItem}>
            <FaPlus />
            Novo Item
          </Button>
        </div>
      </PageHeader>

      <Content>
        <ItemsContainer>
          {taskList?.items.length === 0 ? (
            <EmptyData title="Nenhum Item na Lista" />
          ) : (
            taskList?.items.map(item => (
              <TaskListItem
                key={item.id}
                item={item}
                finishedItem={finishedItem}
                deleteItem={deleteItem}
              />
            ))
          )}
        </ItemsContainer>
      </Content>
    </Container>
  );
};

export default TaskItem;
