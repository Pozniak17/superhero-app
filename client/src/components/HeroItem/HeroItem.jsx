import { IoIosRemoveCircle } from "react-icons/io";
import {
  HeroCard,
  Image,
  StyledLink,
  Label,
  DeleteButton,
} from "./HeroItem.styled";

export const HeroItem = ({ id, images, nickname }) => {
  return (
    <HeroCard>
      <DeleteButton>
        <IoIosRemoveCircle size="24" color="red" />
      </DeleteButton>
      <StyledLink to={`/catalog/${id}`}>
        <Image src={images[0]} alt="Hero label" />
        <Label>{nickname}</Label>
      </StyledLink>
    </HeroCard>
  );
};
