import { useState } from "react";

interface UsePaginationParams {
  initialPage: number;
  totalPages: number | null;
}

export interface Pagination {
  next: () => void;
  prev: () => void;
  reset: () => void;
  pageState: [number, React.Dispatch<React.SetStateAction<number>>];
}

const usePagination = (params: UsePaginationParams): Pagination => {
  const { initialPage, totalPages } = params;

  const pageState = useState<number>(initialPage);

  const [page, setPage] = pageState;

  const isCanMoveNextPage = () => {
    if (!totalPages) return false;
    const isCan = page < totalPages;

    return isCan;
  };
  const next = () => {
    const isCanMove = isCanMoveNextPage();

    if (isCanMove) {
      const nextPage = page + 1;

      setPage(nextPage);
      return;
    }

    return;
  };

  const isCanMovePrevPage = () => {
    const isCan = page > 1;

    return isCan;
  };

  const prev = () => {
    const isCanMove = isCanMovePrevPage();

    if (isCanMove) {
      const prevPage = page - 1;

      setPage(prevPage);
      return;
    }

    return;
  };

  const reset = () => {
    setPage(initialPage);
  };

  return { next, prev, pageState, reset };
};

export default usePagination;
