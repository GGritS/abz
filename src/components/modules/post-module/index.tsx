import React, { FC } from "react";
import { PostForm } from "../form";

import style from "./index.module.scss";
import { usePositions } from "../../../hooks/usePositions";
import { Loader } from "../loader";
import { Outro } from "../outro";
import { useUsersContext } from "../../../hooks/useUsersContext";

export const PostModule: FC = () => {
  const { value, loading } = usePositions();
  const { isUserRegistered } = useUsersContext();

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {isUserRegistered ? (
          <>
            <Outro />
          </>
        ) : (
          <div className={style.formWrapper}>
            <h1 className={style.title}>Working with POST request</h1>
            {loading ? <Loader /> : <PostForm positions={value || []} />}
          </div>
        )}
      </div>
    </div>
  );
};
