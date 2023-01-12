import React, { FC } from "react";

import style from "./index.module.scss";
import noAvatar from "./../../../sources/images/noAvatar.jpeg";

type ImageProps = {
  image: string | undefined;
  type?: "normal";
};

export const Image: FC<ImageProps> = ({ image, type }) => {
  return (
    <div className={style.wrapper}>
      <img src={!image ? noAvatar : image} alt="avatar" className={style.img} />
    </div>
  );
};
