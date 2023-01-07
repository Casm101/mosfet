/* eslint-disable react/display-name */
import React, { memo } from "react";
import { IDropMenu } from "../../types";
import { MenuContainer } from "./styles";

export const DropMenu = memo<IDropMenu>(({}) => {
  return (
    <>
      <MenuContainer>
        <div className="section">
          <h2 className="link">themes</h2>
					<h2 className="link">about</h2>
          <h2 className="link">bookmarks</h2>
        </div>
      </MenuContainer>
    </>
  );
});
