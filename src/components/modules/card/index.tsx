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
        <Tooltip title={name} wrapperClasses={style.name}>
          {name}
        </Tooltip>
        <div>
          <Tooltip title={position}>{position}</Tooltip>
          <Tooltip title={email}>{email}</Tooltip>
          <Tooltip title={phone}>{phone}</Tooltip>
        </div>
      </div>
    </div>
  );
};
