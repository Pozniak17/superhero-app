import { Link } from "react-router-dom";
import { HeroCard, Image, Label } from "./HeroItem.styled";

export const HeroItem = ({ id, images, nickname }) => {
  console.log(images);
  return (
    <HeroCard>
      <Link to={`/catalog/${id}`}>
        <Image src={images[0]} alt="Hero label" />
        <Label>{nickname}</Label>
        {/* <button>Delete</button> */}
      </Link>
    </HeroCard>
  );
};
