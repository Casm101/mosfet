/* eslint-disable react/display-name */
import React, { memo } from "react";
import { INavigation } from "../../types";

import { NavBar } from "./styles";

export const Navigation = memo<INavigation>(({ title = "mosfet" }) => {
  return (
    <NavBar>
      <span>logo</span>
      <span>{title}</span>
      <span>settings</span>
    </NavBar>
  );
});
