import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  padding: 30px;

  display: flex;
  flex-direction: column;
  color: #f5f5f5;
`;

export const PageHeader = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 140px;
  padding: 8px 0;

  background: #0f4c75;
  color: #f5f5f5;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${shade(0.2, '#0f4c75')};
  }
`;
