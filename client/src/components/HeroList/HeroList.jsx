import { HeroItem } from "../HeroItem/HeroItem";
import { List, Wrapper } from "./HeroList.styled";

export const HeroList = ({ items, onDelete }) => {
  // console.log(items);
  return (
    <>
      <Wrapper>
        {items?.length > 0 && (
          <List>
            {items.map(({ _id, nickname, images }) => (
              <HeroItem
                onDelete={onDelete}
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
    </>
  );
};
