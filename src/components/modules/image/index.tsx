import React, { FC } from "react";

import style from "./index.module.scss";
import noAvatar from "./../../../sources/images/noAvatar.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ImageProps = {
  image: string | undefined;
  type?: "normal";
};

export const Image: FC<ImageProps> = ({ image, type }) => {
  return (
    <div className={style.wrapper}>
      <LazyLoadImage src={image ? image : noAvatar} className={style.img} />
    </div>
  );
};
