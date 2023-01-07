/* eslint-disable react/display-name */

import React, { memo, useEffect, useState } from "react";
import { IBookmarkButton, IBookmark } from "../../types";
import { BookmarkIcon } from "../../icons"

export const BookmarkButton = memo<IBookmarkButton>(({ articleID, article }) => {

  const [isSaved, setIsSaved] = useState(false);

	const checkBookmark = (id: string) => {
    if (localStorage.getItem("bookmark"?.id)) {
      setIsSaved(true);
      return true;
    } else {
      setIsSaved(false);
      return false;
    }
  };

	const addBookmark = (id: string, data: IBookmark) => {
		if (!checkBookmark(id)) {
			localStorage.setItem("bookmark".id, JSON.stringify(data));
		}
	};

	const removeBookmark = (id: string) => {
		if (checkBookmark(id)) {
      localStorage.removeItem("bookmark".id);
    }
	};

	const toggleBookmark = (e: any, id: string, data?: IBookmark) => {
		e.stopPropagation();
		console.log("clicked");
		if (isSaved) addBookmark(id, data as IBookmark); 
		else removeBookmark(id);
	};

	useEffect(() => {

	}, []);

  return (
    <BookmarkIcon
      fill={isSaved}
      size={{ h: 18, w: 18 }}
      onClick={(e: any) => toggleBookmark(e, articleID, article)}
    />
  );
});
