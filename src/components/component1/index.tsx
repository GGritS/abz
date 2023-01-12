import React, { FC } from "react";
import { Button } from "../modules/button";
import cn from "classnames";

import style from "./index.module.scss";

export const Component1: FC = () => {
  return (
    <div className={style.wrapper}>
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
