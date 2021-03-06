import React, { useCallback, useState, ChangeEvent } from 'react';
import { FaReply, FaTasks, FaSave } from 'react-icons/fa';

import { useHistory, useParams } from 'react-router-dom';
import { store } from 'react-notifications-component';
import {
  Container,
  PageHeader,
  Button,
  Content,
  Form,
  Input,
  ButtonForm,
} from './styles';
import ITaskItemForm from '../../interfaces/taskItemForm';
import api from '../../services/api';

const TaskItemForm: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();
  const [taskList, setTaskList] = useState<ITaskItemForm>({
    name: '',
  });

  const back = useCallback(() => {
    history.goBack();
  }, [history]);

  const updateModel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTaskList({
        ...taskList,
        [e.target.name]: e.target.value,
      });
    },
    [taskList],
  );

  const onSubmit = useCallback(
    async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await api.post(`/task-item/${id}/add-item`, taskList);
        store.addNotification({
          title: 'Sucesso!',
          message: 'Item adicionado a lista com sucesso!',
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],
          dismiss: {
            duration: 2000,
          },
        });
        back();
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
    [taskList, back, id],
  );

  return (
    <Container>
      <PageHeader>
        <h2>Novo Item</h2>
        <Button onClick={back}>
          <FaReply />
          Voltar
        </Button>
      </PageHeader>
      <Content>
        <Form onSubmit={onSubmit}>
          <div>
            <FaTasks size={42} />
          </div>
          <label>Item:</label>
          <Input
            type="text"
            name="name"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
          />
          <ButtonForm type="submit">
            <FaSave />
            Salvar
          </ButtonForm>
        </Form>
      </Content>
    </Container>
  );
};

export default TaskItemForm;
