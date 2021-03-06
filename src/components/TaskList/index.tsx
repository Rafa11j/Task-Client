import React, { memo, useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import { Container, InfoName, InfoNameTitle, InfoNameItems } from './styles';
import taskListIcon from '../../assets/checklist.svg';
import ITaskList from '../../interfaces/taskList';

interface IProps {
  taskList: ITaskList;
}

const TaskList: React.FC<IProps> = props => {
  const { taskList } = props;
  const history = useHistory();

  const newItem = useCallback(() => {
    history.push(`/${taskList.id}/itens`);
  }, [history, taskList.id]);

  return (
    <Container onClick={newItem}>
      <InfoName>
        <img src={taskListIcon} alt="Logo" />
        <div>
          <InfoNameTitle>{taskList.name}</InfoNameTitle>
          <InfoNameItems>{`${taskList.items.length} itens`}</InfoNameItems>
        </div>
      </InfoName>
    </Container>
  );
};

export default memo(TaskList);
