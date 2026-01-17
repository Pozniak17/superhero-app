import styled from "styled-components";

export const Form = styled.form.attrs({ autoComplete: "off" })`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  height: 400px;

  gap: 12px;

  padding: 8px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input.attrs({ type: "text" })`
  padding: 4px;
  font: inherit;
`;

export const Button = styled.button.attrs({ type: "submit" })`
  padding: 4px 8px;
  cursor: pointer;
`;
