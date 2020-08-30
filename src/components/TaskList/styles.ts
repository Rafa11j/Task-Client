import styled from 'styled-components';

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

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateX(10px);
  }
`;

export const InfoName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 80px;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoNameTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const InfoNameItems = styled.span`
  border-radius: 20px;
  color: #bbe1fa;
`;
