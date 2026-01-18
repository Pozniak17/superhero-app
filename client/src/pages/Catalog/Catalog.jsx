import axios from "axios";
import { useEffect, useState } from "react";
import { HeroList } from "../../components/HeroList/HeroList";
import PaginationButton from "../../components/PaginationButton/PaginationButton";

export default function Catalog() {
  const [herous, setHeroes] = useState([]);
  // 1. Стейт для поточної сторінки (починаємо з 1)
  const [page, setPage] = useState(1);
  // 2. Стейт для загальної кількості сторінок (щоб знати, коли кінець)
  const [totalPages, setTotalPages] = useState(1);

  // console.log(herous);
  useEffect(() => {
    async function fetchHerous() {
      const response = await axios.get(
        `https://superhero-app-0he6.onrender.com/heroes?page=${page}&perPage=5`,
      );

      setHeroes(response.data.items);
      setTotalPages(response.data.totalPages);
    }

    fetchHerous();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const deleteHero = async (id) => {
    const isConfirmed = window.confirm("Do you want to delete hero?");
    if (!isConfirmed) return;

    try {
      // 1. Видаляємо на сервері
      await axios.delete(
        `https://superhero-app-0he6.onrender.com/heroes/${id}`,
      );

      // 2. Видаляємо локально зі стейту (щоб не перезавантажувати сторінку)
      setHeroes((prevHeroes) => prevHeroes.filter((hero) => hero._id !== id));

      alert("Hero successfully delete!");
    } catch (error) {
      console.error(error);
      alert("Delete failed. Please try again.");
    }
  };

  return (
    <>
      <HeroList items={herous} onDelete={deleteHero} />
      <PaginationButton
        nextPage={handleNextPage}
        prevPage={handlePrevPage}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </>
  );
}
