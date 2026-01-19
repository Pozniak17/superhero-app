import { useEffect } from "react";
import { HeroList } from "../../components/HeroList/HeroList";
import PaginationButton from "../../components/PaginationButton/PaginationButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroes, deleteHero } from "../../redux/operations";
import { setPage } from "../../redux/heroesSlice";

export default function Catalog() {
  const dispatch = useDispatch();

  // const heroes = useSelector((state) => state.heroes.items);
  const page = useSelector((state) => state.heroes.page);
  const totalPages = useSelector((state) => state.heroes.totalPages);
  const isLoading = useSelector((state) => state.heroes.isLoading);

  useEffect(() => {
    dispatch(fetchHeroes(page));
  }, [dispatch, page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Do you want to delete hero?");
    if (isConfirmed) {
      dispatch(deleteHero(id));
    }
  };

  return (
    <>
      {isLoading && (
        <h2 style={{ textAlign: "center" }}>
          Loading Heroes... waiting 1min pls:D
        </h2>
      )}
      <HeroList onDelete={handleDelete} />
      <PaginationButton
        nextPage={handleNextPage}
        prevPage={handlePrevPage}
        page={page}
        totalPages={totalPages}
        setPage={handlePageChange}
      />
    </>
  );
}
