/* eslint-disable react/display-name */
import React, { memo, useState } from "react";
import { INavigation } from "../../types";

import { RSSIcon, SettingsIcon } from "../../icons";

import { NavBar } from "./styles";
import { DropMenu } from "../DropMenu";

export const Navigation = memo<INavigation>(({ title = "transistor" }) => {

	const [settingsMenuVisible, setSettingsMenuVisible] = useState(false);
	const [rssMenuVisible, setRssMenuVisible] = useState(false);

  return (
    <NavBar>
      <span
        onClick={() => setRssMenuVisible(!rssMenuVisible)}
        style={{ position: "relative" }}
      >
        <RSSIcon />
        {rssMenuVisible && <DropMenu className="left" />}
      </span>
      <span>{title}</span>
      <span
        onClick={() => setSettingsMenuVisible(!settingsMenuVisible)}
        style={{ position: "relative" }}
      >
        <SettingsIcon />
        {settingsMenuVisible && <DropMenu className="right" />}
      </span>
    </NavBar>
  );
});
