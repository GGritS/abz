import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";

import style from "./index.module.scss";

export const Loader: FC = () => {
  return (
    <Box className={style.wrapper}>
      <CircularProgress color="secondary" />
    </Box>
  );
};
