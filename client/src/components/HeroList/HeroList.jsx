import { HeroItem } from "../HeroItem/HeroItem";
import { List, Wrapper } from "./HeroList.styled";
import Superman from "/img/Superman.webp";

export const HeroList = ({ items }) => {
  return (
    <Wrapper>
      {items.length > 0 && (
        <List>
          {items.map(({ _id, nickname }) => (
            <HeroItem key={_id} id={_id} img={Superman} nickname={nickname} />
          ))}
        </List>
      )}
    </Wrapper>
  );
};
