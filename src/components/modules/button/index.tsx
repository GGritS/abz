import React, { FC, ReactNode } from "react";
import cn from "classnames";

import "./../../../palette/localPalette.scss";
import style from "./index.module.scss";
import { ButtonBaseProps } from "@mui/material";

type ButtonProps = ButtonBaseProps & {
  children?: ReactNode;
  color?: "disabled" | "primary" | "secondary";
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  children,
  color = "primary",
  onClick = () => {},
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn(style.wrapper, {
        primaryBtn: color === "primary",
        secondaryBtn: color === "secondary",
        disabledBtn: color === "disabled",
      })}
    >
      {children}
    </button>
  );
};
