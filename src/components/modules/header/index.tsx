import React, { FC } from "react";
import { Button } from "../button";
import cn from "classnames";

import style from "./index.module.scss";
import logo from "./../../../sources/images/Logo.svg";

type HeaderProps = {
  type?: "mobile" | "desktop";
};

export const Header: FC<HeaderProps> = ({ type = "desktop" }) => {
  return (
    <div
      className={cn(style.wrapper, {
        [style.desktop]: type === "desktop",
        [style.mobile]: type === "mobile",
      })}
    >
      <div className={style.content}>
        <img src={logo} alt="" />
        <div className={style.buttons}>
          <Button>Users</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </div>
  );
};
