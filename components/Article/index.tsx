/* eslint-disable react/display-name */
import React, { memo, useState } from "react";
import * as dayjs from "dayjs";

import { IArticle } from "../../types";
import { ArticleCard, ArticleList } from "./styles";
import { BookmarkIcon } from "../../icons";

export const Article = memo<IArticle>(({ title, content, date, type }) => {

	const [collapseState, setCollapseState] = useState(false);

	const categories = type.map((t, key) => {
		return <span key={key}>{t.toUpperCase()}</span>;
	});

  return (
    <ArticleCard
      open={collapseState}
      onClick={() => setCollapseState(!collapseState)}
    >
      <div className="articleHeader">
        <span>
          <p className="title">{title}</p>
          <p className="subtitle">
            <span>{dayjs(date).format("MMMM DD, YYYY").toUpperCase()}</span> | {categories} |{" "}
            <BookmarkIcon size={{ h: 18, w: 18 }} />
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


