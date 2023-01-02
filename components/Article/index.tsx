/* eslint-disable react/display-name */
import React, { memo, useEffect, useState } from "react";
import Image from "next/image";

import { IArticle } from "../../types";
import { ArticleCard, ArticleList } from "./styles";

export const Article = memo<IArticle>(({ title, date, type }) => {

	const [collapseState, setCollapseState] = useState(false);

	useEffect(() => {
    console.log(collapseState);
  }, [collapseState]);

  return (
    <ArticleCard
      open={collapseState}
      onClick={() => setCollapseState(!collapseState)}
    >
      <div className="articleHeader">
        <p className="title">{title}</p>
        <p className="subtitle">
          {date} | {type}
        </p>
      </div>
      <div className={`articleContents ${collapseState ? "open" : ""}`}>
        <figure>
          <div className="imageContainer">
            <Image
              src={
                "https://mosfet.net/wp-content/uploads/2023/01/Shinsaku-Hiura-Creates-Open-Source-Space-Mushroom-6-DOF-Mouse.gif"
              }
              alt={"Article description"}
              width={700}
              height={390}
            />
          </div>
        </figure>
        <div className="contents">
          <p>
            Engineer Shinsaku Hiura (@shiura) recently released the Space
            Mushroom mouse which has 6 degrees of freedom. It uses three analog
            joystick sensors for game controllers.
          </p>
          <p>
            Engineer Shinsaku Hiura (@shiura) recently released the Space
            Mushroom mouse which has 6 degrees of freedom. It uses three analog
            joystick sensors for game controllers.
          </p>
        </div>
        <div className="links">
          <a
            href="https://www.youtube.com/watch?v=Vs6Xte4gOxk"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://www.youtube.com/watch?v=Vs6Xte4gOxk
          </a>
          <br />
          <a
            href="https://www.thingiverse.com/thing:5739462"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://www.thingiverse.com/thing:5739462
          </a>
          <br />
          <a
            href="https://www.instructables.com/Space-Mushroom-Full-6-DOFs-Controller-for-CAD-Appl/"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://www.instructables.com/Space-Mushroom-Full-6-DOFs-Controller-for-CAD-Appl/
          </a>
        </div>
      </div>
    </ArticleCard>
  );
});


