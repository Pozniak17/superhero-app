import { Link } from "react-router-dom";
import { HeroCard, Image, Label } from "./HeroItem.styled";

export const HeroItem = ({ id, img, nickname }) => {
  return (
    <HeroCard>
      <Link to={`/catalog/${id}`}>
        <Image src={img} alt="Hero label" />
        <Label>{nickname}</Label>
        {/* <button>Delete</button> */}
      </Link>
    </HeroCard>
  );
};
