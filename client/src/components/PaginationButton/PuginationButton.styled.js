import styled from "styled-components";

export const List = styled.ul`
  margin-top: 30px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
  display: flex;
  width: 26px;
  height: 24px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$active ? "#5932ea" : "#f5f5f5")};
  border-radius: 4px;
  border: 1px solid ${(props) => (props.$active ? "#5932ea" : "#eeeeee")};

  color: ${(props) => (props.$active ? "#ffffff" : "#404b52")};
  font-style: Medium;
  font-size: 12px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -1%;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
