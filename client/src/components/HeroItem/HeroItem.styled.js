import styled from "styled-components";
import { Link } from "react-router-dom";

export const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 10;

  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const HeroCard = styled.li`
  position: relative;
  list-style: none;
  border: 1px solid #2a2a2a;
  width: 180px;
  height: 360px;
  overflow: hidden;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  /* При наведенні на картку показуємо кнопку */
  &:hover ${DeleteButton} {
    opacity: 1;
  }

  &:hover {
    border-style: dashed;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 90%;
  // Ця властивість — магія. Вона обрізає краї, але зберігає пропорції,
  // як background-size: cover в CSS
  object-fit: cover;
  object-position: top;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: gold;
`;

export const Label = styled.p`
  background-color: orange;
  font-weight: 600;
  border-radius: 4px;

  text-align: center;
  margin-top: 8px;
  margin-bottom: 0;
  color: #2a2a2a;
`;
