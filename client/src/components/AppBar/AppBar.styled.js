import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  background-color: rgba(247, 247, 247, 1);
  padding: 24px 64px;
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #101828;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;

  &.active {
    color: var(--Button-Hover, #d84343);
  }
`;

export const AccentFirst = styled.span`
  color: black;
  font-weight: 700;
  font-size: 20px;
`;

export const AccentSecond = styled.span`
  color: #b30000;
  font-weight: 700;
  font-size: 20px;
`;

export const List = styled.ul`
  margin-left: 450px;
  list-style: none;
  display: flex;
  gap: 32px;
`;
