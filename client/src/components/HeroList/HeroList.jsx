import { HeroItem } from "../HeroItem/HeroItem";
import { List, Wrapper } from "./HeroList.styled";
// import Superman from "/img/Superman.webp";

export const HeroList = ({ items }) => {
  console.log(items);
  return (
    <Wrapper>
      {items.length > 0 && (
        <List>
          {items.items.map(({ _id, nickname, images }) => (
            <HeroItem
              key={_id}
              id={_id}
              // img={Superman}
              nickname={nickname}
              images={images}
            />
          ))}
        </List>
      )}
    </Wrapper>
  );
};
