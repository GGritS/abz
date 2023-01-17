import React, { FC } from "react";
import { Button } from "../button";
import { Card } from "../card";

import cn from "classnames";

import style from "./index.module.scss";
import { useUsersContext } from "../../../hooks/useUsersContext";
import { Loader } from "../loader";

export const GetModule: FC = () => {
  const { totalPages, onShowMore, page, loading, sortedUsers } =
    useUsersContext();

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h1 className={style.title}>Working with GET request</h1>
        {!sortedUsers.length ? (
          <Loader />
        ) : (
          <div className={style.cardsWrapper}>
            {sortedUsers?.map((user) => (
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
            color={!sortedUsers.length || loading ? "disabled" : "primary"}
            onClick={onShowMore}
          >
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};
