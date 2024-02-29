import { PaginationContainer } from "./Pagination.styles";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
}) => {
  const handlePreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <PaginationContainer>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Back
      </button>
      <button onClick={handleNextPage} aria-label="Next Page">
        Next
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
