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

export const Content = styled.div`
  width: 100%;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
`;

export const ItemsContainer = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  height: 220px;
  background: #0f4c75;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  padding: 30px;
  border-radius: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  margin-top: 5px;
  height: 32px;
  padding-left: 10px;
`;

export const ButtonForm = styled.button`
  width: 100%;
  padding: 8px 0;

  margin-top: 20px;

  background: #1b262c;
  color: #f5f5f5;
  border: none;
  border-radius: 3px;
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
    background: ${shade(0.2, '#1b262c')};
  }
`;

export const PageHeader = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    button + button {
      margin-left: 5px;
    }
  }
`;

export const Button = styled.button`
  width: 140px;
  padding: 8px 0;

  background: #0f4c75;
  color: #f5f5f5;
  border: none;
  border-radius: 3px;
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
