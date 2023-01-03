/* eslint-disable react/display-name */
import React, { memo, useState } from "react";
import * as dayjs from "dayjs";
import Image from "next/image";

import { IArticle } from "../../types";
import { ArticleCard, ArticleList } from "./styles";
import { BookmarkIcon } from "../../icons";

export const Article = memo<IArticle>(({ title, image, content, date, type }) => {

	const [collapseState, setCollapseState] = useState(false);

	const categories = type.map((t, key) => {
		return <span key={key}>{t.toUpperCase()}</span>;
	});

	const regexImage = (i: string) => {
    const result = i.match(/<[a-zA-Z]+.*="[^"]*".*\/>/i);
		console.log(result);
    return result as unknown;
	};

	const articleImage = regexImage(image);

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
        <figure>
          <div className="imageContainer">
            <Image
              src={(articleImage as string) ?? ""}
              placeholder="blur"
              blurDataURL="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logistec.com%2Fwp-content%2Fuploads%2F2017%2F12%2Fplaceholder.png&f=1&nofb=1&ipt=47fcfb219c878c51ac23234e24c66a5793ff3b371e12ac77ffd8831ff8bb1fbd&ipo=images"
              alt={"Article description"}
              width={700}
              height={390}
            />
          </div>
        </figure>
        <div
          className="contents"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </ArticleCard>
  );
});


