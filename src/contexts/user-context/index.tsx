import { createContext, FC, useEffect, useMemo, useState } from "react";
import { ReactNode } from "react";
import { INITIAL_PAGE, PAGE_SIZE } from "../../constants";
import { useUsers } from "../../hooks/useUsers";
import { User } from "../../types/type";

export interface UserContextProviderProps {
  children: ReactNode;
}

export interface UserContextParams {
  users?: User[];
  totalPages: number | null;
  reset: () => void;
  onShowMore: () => void;
  sortedUsers: User[];
  page: number;
  loading: boolean;
  isUserRegistered: boolean;
  onUserRegistered: () => void;
}

const initialContext: UserContextParams = {
  users: [],
  totalPages: null,
  onShowMore: function (): void {
    throw new Error("Function not implemented.");
  },
  sortedUsers: [],
  page: 0,
  loading: false,
  reset: function (): void {
    throw new Error("Function not implemented.");
  },
  isUserRegistered: false,
  onUserRegistered: function (): void {
    throw new Error("Function not implemented.");
  },
};

export const UserContext = createContext(initialContext);

export const UserContextProvider: FC<UserContextProviderProps> = ({
  children,
}) => {
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState<null | number>(null);

  const [page, setPage] = useState(INITIAL_PAGE);
  const params = useMemo(() => ({ pageSize: PAGE_SIZE, page }), [page]);

  const usersState = useUsers(params);

  const { data, loading, fetchUsersState } = usersState;

  useEffect(() => {
    if (data?.total_pages) {
      setTotalPages(data?.total_pages);
    }
  }, [data?.total_pages]);

  const isCanMoveNextPage = () => {
    if (!totalPages) return false;
    const isCan = page < totalPages;

    return isCan;
  };

  const next = () => {
    const isCanMove = isCanMoveNextPage();

    if (isCanMove) {
      setPage((prev) => prev + 1);
      return;
    }
    return;
  };

  useEffect(() => {
    const isInitialPage = page === INITIAL_PAGE;

    if (isInitialPage) {
      setUsers(data?.users || []);
      // next();
      return;
    }

    if (data?.users) {
      setUsers((prev) => [...prev, ...data.users]);
    }
    // eslint-disable-next-line
  }, [data?.users]);

  const sortedUsers = useMemo(() => {
    return users.sort(
      (a, b) => b.registration_timestamp - a.registration_timestamp
    );
  }, [users]);

  const reset = () => {
    setPage(INITIAL_PAGE);
  };

  const onShowMore = () => {
    next();
  };

  const onUserRegistered = () => {
    reset();
    fetchUsersState();
    setIsUserRegistered(true);
  };

  return (
    <UserContext.Provider
      value={{
        sortedUsers,
        totalPages,
        onShowMore,
        page,
        reset,
        loading,
        isUserRegistered,
        onUserRegistered,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
