import { useEffect, useState } from "react";
import { HeroList } from "../../components/HeroList/HeroList";
import axios from "axios";

export default function Catalog() {
  const [herous, setHerous] = useState([]);

  console.log(herous);
  useEffect(() => {
    async function fetchHerous() {
      const response = await axios.get(
        "https://superhero-app-0he6.onrender.com/heroes"
      );

      setHerous(response.data.data);
    }

    fetchHerous();
  }, []);
  return (
    <>
      <HeroList items={herous} />
    </>
  );
}
