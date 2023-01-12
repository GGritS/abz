import React, { FC } from "react";

import style from "./index.module.scss";
import cn from "classnames";
import { Image } from "../image";
import avatar from "./../../../sources/images/avatar.png";
import { Tooltip } from "../tooltip";

type CardProps = {
  name: string;
  photo: string;
  phone: string;
  position: string;
  email: string;
};

export const Card: FC<CardProps> = ({
  name,
  phone,
  email,
  photo,
  position,
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Image image={photo} />
        <Tooltip title={name}>
          <div
            className={cn(style.text, style.name)}
            style={{ position: "relative" }}
          >
            {name}
          </div>
        </Tooltip>
        <div>
          <Tooltip title={position}>
            <p className={style.text}>{position}</p>
          </Tooltip>
          <Tooltip title={email}>
            <p className={style.text}>{email}</p>
          </Tooltip>

          <Tooltip title={phone}>
            <p className={style.text}>{phone}</p>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
