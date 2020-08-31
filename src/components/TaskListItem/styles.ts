import styled, { css } from 'styled-components';

interface ITitleProps {
  finished: boolean;
}

export const Container = styled.div`
  width: 100%;
  padding: 24px 12px;
  margin: 10px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: #0f4c75;
  border-right: 5px solid #3282b8;
  border-radius: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export const Actions = styled.div`
  span + span {
    margin-left: 10px;
  }

  span {
    cursor: pointer;
  }
`;

export const Title = styled.h3<ITitleProps>`
  ${props =>
    props.finished &&
    css`
      text-decoration: line-through;
      font-style: italic;
    `}
`;
