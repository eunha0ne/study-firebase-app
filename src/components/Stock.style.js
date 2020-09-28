import styled from "styled-components";

const baseButton = `
  height: 45px;
  outline: none;
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  @media (max-width: 576px) {
    height: 32px;
    font-size: 0.8rem;
  }
  
  &:hover {
    cursor: pointer;
    background: rgba(94, 223, 223, 0.1);
  }
`;

export const List = styled.li`
  border-top: 1px solid #d7d7d7;

  &:hover {
    background: rgba(94, 223, 223, 0.1);
  }

  &:last-of-type {
    border-bottom: 1px solid #d7d7d7;
  }
`;

export const Group = styled.dl`
  padding: 0 16px;
  display: grid;
  grid-template-columns: auto minmax(200px, 1fr) repeat(
      2,
      auto minmax(150px, auto)
    );
  grid-template-rows: 40px;
  grid-gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, auto minmax(100px, auto));
    font-size: 0.8rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: auto minmax(100px, 1fr) repeat(
        2,
        auto minmax(50px, auto)
      );
    font-size: 0.8rem;
  }

  dt {
    text-align: right;
  }

  dd {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const Submit = styled.label`
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid #d7d7d7;

  input {
    width: 100%;
    ${baseButton};
  }
`;

export const EditInput = styled.input`
  width: 100%;
  height: 70%;
  padding: 0 8px;
  outline: none;
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ButtonGroup = styled.div`
  padding: 8px 0px;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    ${baseButton};
    margin: 0 4px;
    padding: 8px;
    height: 38px;
  }
`;
