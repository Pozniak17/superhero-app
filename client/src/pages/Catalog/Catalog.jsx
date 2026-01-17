import axios from "axios";
import { useEffect, useState } from "react";
import { HeroList } from "../../components/HeroList/HeroList";
import PaginationButton from "../../components/PaginationButton/PaginationButton";
import { HeroForm } from "../../components/HeroForm/HeroForm";

export default function Catalog() {
  const [herous, setHerous] = useState([]);
  // 1. Стейт для поточної сторінки (починаємо з 1)
  const [page, setPage] = useState(1);
  // 2. Стейт для загальної кількості сторінок (щоб знати, коли кінець)
  const [totalPages, setTotalPages] = useState(1);

  // console.log(herous);
  useEffect(() => {
    async function fetchHerous() {
      const response = await axios.get(
        `https://superhero-app-0he6.onrender.com/heroes?page=${page}&perPage=5`
      );

      setHerous(response.data.items);
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
  return (
    <>
      <HeroList items={herous} />
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
