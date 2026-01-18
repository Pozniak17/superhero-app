import { IoIosRemoveCircle } from "react-icons/io";
import {
  HeroCard,
  Image,
  StyledLink,
  Label,
  DeleteButton,
} from "./HeroItem.styled";

export const HeroItem = ({ id, images, nickname, onDelete }) => {
  const handleDeleteClick = (e) => {
    // щоб кліки не заходив в Link
    e.preventDefault();
    e.stopPropagation();

    // з catalog
    onDelete(id);
  };
  return (
    <HeroCard>
      <DeleteButton onClick={handleDeleteClick}>
        <IoIosRemoveCircle size="24" color="red" />
      </DeleteButton>
      <StyledLink to={`/catalog/${id}`}>
        <Image src={images[0]} alt="Hero label" />
        <Label>{nickname}</Label>
      </StyledLink>
    </HeroCard>
  );
};
