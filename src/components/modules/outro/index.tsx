import React, { FC } from "react";

import style from "./index.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import successImage from "./../../../sources/images/success-image.svg";

export const Outro: FC = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>User successfully registered</h1>
      <LazyLoadImage src={successImage} className={style.img} />
    </div>
  );
};
