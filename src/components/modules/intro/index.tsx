import React, { FC } from "react";
import { Button } from "../button";
import cn from "classnames";

import { LazyLoadImage } from "react-lazy-load-image-component";

import style from "./index.module.scss";
import pexels from "./../../../sources/images/pexels.avif";

export const Intro: FC = () => {
  return (
    <div className={style.wrapper}>
      <LazyLoadImage src={pexels} className={style.img} />
      <div className={style.shadow}></div>
      <div className={style.content}>
        <h1 className={cn(style.title, style.text)}>
          Test assignment for front-end developer
        </h1>
        <p className={cn(style.infoText, style.text)}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button>Sign up</Button>
      </div>
    </div>
  );
};
