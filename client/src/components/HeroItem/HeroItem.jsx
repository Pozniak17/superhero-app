import { HeroCard, Image, StyledLink, Label } from "./HeroItem.styled";

export const HeroItem = ({ id, images, nickname }) => {
  // console.log(images);
  return (
    <HeroCard>
      <StyledLink to={`/catalog/${id}`}>
        <Image src={images[0]} alt="Hero label" />
        <Label>{nickname}</Label>
        {/* <button>Delete</button> */}
      </StyledLink>
    </HeroCard>
  );
};
