import { useEffect, useState } from "react";
import { Wrapper } from "./Details.styled";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Details() {
  const [hero, setHero] = useState(null);

  const { id } = useParams();
  console.log(hero);

  useEffect(() => {
    async function fetchHero() {
      const response = await axios.get(
        `https://superhero-app-0he6.onrender.com/herous/${id}`
      );

      // console.log(response.data.nickname);
      setHero(response.data);
    }

    fetchHero();
  }, [id]);

  return (
    <>
      {hero && (
        <Wrapper>
          <h2>Nickname: {hero.nickname}</h2>
          <h2>Real Name: {hero.real_name}</h2>
          <h3>Description: {hero.origin_description}</h3>
          <h3>Super Powers: {hero.superpowers}</h3>
          <h3>Phrase: {hero.catch_phrase}</h3>
        </Wrapper>
      )}
    </>
  );
}
