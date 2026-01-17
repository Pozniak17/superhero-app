import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Button, List } from "./PuginationButton.styled";

export default function PuginationButton({
  nextPage,
  prevPage,
  page,
  setPage,
  totalPages,
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <List>
      <li>
        <Button onClick={prevPage} disabled={page === 1}>
          <GrFormPrevious />
        </Button>
      </li>
      {pages.map((pageNumber) => (
        <li key={pageNumber}>
          <Button
            $active={pageNumber === page}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </Button>
        </li>
      ))}
      <li>
        <Button onClick={nextPage} disabled={page === totalPages}>
          <GrFormNext />
        </Button>
      </li>
    </List>
  );
}
