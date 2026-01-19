import { useEffect } from "react";
import { Image, Item, List, Wrapper } from "./Details.styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroById } from "../../redux/operations";

const BASE_URL = "https://superhero-app-0he6.onrender.com";

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const hero = useSelector((state) => state.heroes.currentHero);
  const isLoading = useSelector((state) => state.heroes.isLoading);

  useEffect(() => {
    dispatch(fetchHeroById(id));
  }, [dispatch, id]);

  if (isLoading) return <h2>Loading hero details...</h2>;

  return (
    <>
      {hero && (
        <Wrapper>
          <h2>Nickname: {hero.nickname}</h2>
          <p>
            <strong>Real Name:</strong> {hero.real_name}
          </p>
          <p>
            <strong>Description:</strong> {hero.origin_description}
          </p>
          <p>
            <strong>Super Powers:</strong> {hero.superpowers}
          </p>
          <p>
            <strong>Phrase:</strong> {hero.catch_phrase}
          </p>

          <List>
            {hero.images?.map((image, idx) => (
              <Item key={idx}>
                <Image src={image} alt={hero.real_name} />
              </Item>
            ))}
          </List>
        </Wrapper>
      )}
    </>
  );
}
