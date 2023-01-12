import React, { FC, useCallback, useEffect, useState } from "react";
import { Button } from "../button";
import { Card } from "../card";

import axios from "axios";
import cn from "classnames";

import style from "./index.module.scss";
import useEffectOnce from "../../../hooks/useEffectOnce";
import { PAGE_SIZE } from "../../../constants";
import { Loader } from "../loader";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registration_timestamp: number;
  photo: string;
};

export const GetModule: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const fetchUsers = useCallback(async () => {
    const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${PAGE_SIZE}`;
    const response = await axios.get(url);
    setUsers(response.data.users);
    setTotalPages(response.data.total_pages);
  }, [page]);

  const handleShowMore = useCallback(() => {
    if (totalPages === page) return;
    setPage((prevPage) => prevPage + 1);
  }, [page, totalPages]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h1 className={style.title}>Working with GET request</h1>

        {!users.length ? (
          <Loader />
        ) : (
          <div className={style.cardsWrapper}>
            {users
              .sort(
                (a, b) => a.registration_timestamp - b.registration_timestamp
              )
              .map((user) => (
                <Card
                  key={user.id}
                  name={user.name}
                  photo={user.photo}
                  phone={user.phone}
                  position={user.position}
                  email={user.email}
                />
              ))}
          </div>
        )}

        <div
          className={cn(style.buttonWrapper, {
            [style.invisible]: totalPages === page,
          })}
        >
          <Button
            color={!users.length ? "disabled" : "primary"}
            onClick={handleShowMore}
          >
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};
