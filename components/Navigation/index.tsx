/* eslint-disable react/display-name */
import React, { memo } from "react";
import { INavigation } from "../../types";

import { RSSIcon, SettingsIcon } from "../../icons";

import { NavBar } from "./styles";

export const Navigation = memo<INavigation>(({ title = "transistor" }) => {
  return (
    <NavBar>
      <span><RSSIcon /></span>
      <span>{title}</span>
      <span><SettingsIcon /></span>
    </NavBar>
  );
});
