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

export const Container = styled.section`
  header {
    padding: 0 16px;
  }
`;

export const Form = styled.form`
  fieldset {
    margin: 30px auto;
    padding: 16px 32px;
    display: flex;
    flex-direction: column;
    width: 420px;
    border: 1px solid #d7d7d7;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Label = styled.label`
  margin-top: 8px;
  display: flex;
  align-items: center;

  span {
    min-width: 100px;
    text-align: right;
  }

  input {
    ${baseReset};
    margin-left: 16px;
    padding: 0 8px;
    width: 100%;
    height: 40px;
  }
`;

export const Submit = styled.label`
  margin-top: 32px;

  input {
    width: 100%;
    ${baseButton};
  }
`;
