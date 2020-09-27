import styled from "styled-components";

const baseReset = `
    outline: none;
    background: none;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

const baseButton = `
  height: 45px;
  outline: none;
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:hover {
    cursor: pointer;
    background: rgba(94, 223, 223, 0.1);
  }
`;

export const Container = styled.div`
  position: relative;
  margin: 60px auto;
  padding: 30px;
  width: 380px;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  p {
    line-height: 1.6;
    margin-bottom: 24px;
  }
`;

export const Label = styled.label`
  margin: 8px 0;
  display: flex;
  align-content: center;
  align-items: center;

  span {
    min-width: 50px;
    margin-right: 8px;
  }

  input {
    ${baseReset};
    padding: 0 8px;
    width: 100%;
    height: 38px;
  }
`;

export const Submit = styled.label`
  margin-top: 16px;

  input {
    width: 100%;
    ${baseButton};
  }
`;

export const Toggle = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  text-align: right;

  button {
    margin: 0 4px;
    height: 38px;
    outline: none;
    background: none;
    border: none;

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid #ddd;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #e7e7e7;
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 15px;
    &:first-of-type {
      margin-top: 0;
    }
  }
`;

export const Button = styled.button`
  ${baseButton};
`;
