import React, { FC, ReactNode } from "react";

import style from "./index.module.scss";
import cn from "classnames";

type TooltipProps = {
  children: ReactNode;
  title: string;
  wrapperClasses?: string;
};

export const Tooltip: FC<TooltipProps> = ({
  children,
  title = "#",
  wrapperClasses,
}) => {
  return (
    <div className={cn(style.wrapper, wrapperClasses)}>
      <span className={style.text}>{children}</span>
      <span className={style.tooltip}>{title}</span>
    </div>
  );
};
