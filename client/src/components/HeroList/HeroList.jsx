import { useSelector } from "react-redux";
import { HeroItem } from "../HeroItem/HeroItem";
import { List, Wrapper } from "./HeroList.styled";

export const HeroList = ({ onDelete }) => {
  const items = useSelector((state) => state.heroes.items);
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
