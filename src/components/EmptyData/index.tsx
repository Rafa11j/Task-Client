import React from 'react';
import { Container } from './styles';

import dataEmpty from '../../assets/mailbox.svg';

interface IProps {
  title: string;
}

const EmptyData: React.FC<IProps> = props => {
  const { title } = props;
  return (
    <Container>
      <img src={dataEmpty} alt="NoData" />
      <h3>{title}</h3>
    </Container>
  );
};

export default EmptyData;
