import React, { memo } from 'react';

import { FaCheck, FaTrash } from 'react-icons/fa';
import { Container, Actions, Title } from './styles';
import ITaskItem from '../../interfaces/taskItem';

interface IProps {
  item: ITaskItem;
  finishedItem(id: string): void;
  deleteItem(id: string): void;
}

const TaskListItem: React.FC<IProps> = props => {
  const { item, finishedItem, deleteItem } = props;

  return (
    <Container>
      <Title finished={item.finished}>{item.name}</Title>
      <Actions>
        {!item.finished && (
          <span onClick={() => finishedItem(item.id)}>
            <FaCheck size={24} color="#4caf50" />
          </span>
        )}
        <span onClick={() => deleteItem(item.id)}>
          <FaTrash size={24} color="#f44336" />
        </span>
      </Actions>
    </Container>
  );
};

export default memo(TaskListItem);
