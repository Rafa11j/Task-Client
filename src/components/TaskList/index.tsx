import React, { memo } from 'react';

import { Container, InfoName, InfoNameTitle, InfoNameItems } from './styles';
import taskListIcon from '../../assets/checklist.svg';
import ITaskList from '../../interfaces/taskList';

interface IProps {
  taskList: ITaskList;
}

const TaskList: React.FC<IProps> = props => {
  const { taskList } = props;
  return (
    <Container>
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
