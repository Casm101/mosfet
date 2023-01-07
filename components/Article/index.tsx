/* eslint-disable react/display-name */
import React, { memo, useState } from "react";
import * as dayjs from "dayjs";

import { IArticle } from "../../types";
import { ArticleCard, ArticleList } from "./styles";
import { BookmarkButton } from "../BookmarkButton";

export const Article = memo<IArticle>(({ title, content, date, type }) => {

	const [collapseState, setCollapseState] = useState(false);

	const categories = type.map((t, key) => {
		return <span key={key}>{t.toUpperCase()}</span>;
	});

  return (
    <ArticleCard open={collapseState}>
      <div className="articleHeader">
        <span>
          <p className="title" onClick={() => setCollapseState(!collapseState)}>
            {title}
          </p>
          <p className="subtitle">
            <span>{dayjs(date).format("MMMM DD, YYYY").toUpperCase()}</span> |{" "}
            {categories} |{" "}
            <BookmarkButton articleID={"1"} article={undefined} />
          </p>
        </span>
      </div>
      <div className={`articleContents ${collapseState ? "open" : ""}`}>
        <div
          className="contents"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </ArticleCard>
  );
});


