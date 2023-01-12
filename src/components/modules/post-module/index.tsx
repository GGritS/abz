import React, { FC, useState } from "react";
import { PostForm } from "../form";

import style from "./index.module.scss";
import successImg from "./../../../sources/images/success-image.svg";
import { usePositions } from "../../../hooks/usePositions";
import { Loader } from "../loader";

export const PostModule: FC = () => {
  const [isUserRegistred, setIsUserRegistred] = useState(false);
  const { value, loading } = usePositions();

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {isUserRegistred ? (
          <>
            <h1 className={style.title}>User successfully registered</h1>
            <div className={style.imgWrapper}>
              <img src={successImg} alt="" />
            </div>
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
