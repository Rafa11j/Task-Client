import React from 'react';
import { Container } from './styles';

import dataEmpty from '../../assets/mailbox.svg';

const EmptyData: React.FC = () => {
  return (
    <Container>
      <img src={dataEmpty} alt="NoData" />
      <h3>Nenuma Lista Cadastrada</h3>
    </Container>
  );
};

export default EmptyData;
