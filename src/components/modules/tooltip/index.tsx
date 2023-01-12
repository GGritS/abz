import React, { FC, ReactNode } from "react";

import style from "./index.module.scss";

type TooltipProps = {
  children: ReactNode;
  title: string;
};

export const Tooltip: FC<TooltipProps> = ({ children, title = "#" }) => {
  return (
    <div className={style.wrapper}>
      <span className={style.tooltip}>{title}</span>
      <span>{children}</span>
    </div>
  );
};
