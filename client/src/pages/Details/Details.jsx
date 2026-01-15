import { useEffect, useState } from "react";
import { Wrapper } from "./Details.styled";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = "https://superhero-app-0he6.onrender.com";

export default function Details() {
  const [hero, setHero] = useState(null);

  const { id } = useParams();
  console.log(hero);

  useEffect(() => {
    async function fetchHero() {
      const response = await axios.get(`${BASE_URL}/herous/${id}`);

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
          <ul>
            {hero.images?.map((image, idx) => (
              <li key={idx}>
                <img
                  src={`${BASE_URL}/avatars/${image}`}
                  alt={`${hero.nickname} ${idx + 1}`}
                  style={{
                    width: "200px",
                    display: "block",
                    marginBottom: "10px",
                  }} // для тесту
                />
              </li>
            ))}
          </ul>
        </Wrapper>
      )}
    </>
  );
}
