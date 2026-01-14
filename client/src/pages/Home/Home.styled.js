import { Link } from "react-router-dom";
import styled from "styled-components";

export const Hero = styled.section`
  width: 100%;
  aspect-ratio: 1440 / 696;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2a2a2a;
  background-image: url("/img/Home/Home.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const StyledLink = styled(Link)`
  margin-left: 30px;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  font-style: Medium;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.5%;

  width: 178px;
  padding: 16px 49px;
  background-color: #d84343;
  border-radius: 200px;
`;
