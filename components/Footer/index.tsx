/* eslint-disable react/display-name */
import React, { memo } from "react";
import dayjs from "dayjs";
import { IFooter } from "../../types";


import { StyledFooter } from "./styles";

export const Footer = memo<IFooter>(({ title = "transistor" }) => {
  return (
    <StyledFooter>
      <span>{dayjs().format("YYYY")}</span>
    </StyledFooter>
  );
});
