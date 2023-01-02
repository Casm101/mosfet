import React, { memo } from "react";
import { Article, ArticleList, Navigation } from "../components";

export default function Home(){

	return (
    <div className="page column">
      <Navigation />
      <ArticleList>
        <Article
          title="@Shiura Creates Open Source ‘Space Mushroom’ 6DOF Mouse"
          date="JANUARY 1, 2023"
          type="OPEN SOURCE"
        />
        <Article
          title="@Shiura Creates Open Source ‘Space Mushroom’ 6DOF Mouse"
          date="JANUARY 1, 2023"
          type="OPEN SOURCE"
        />
        <Article
          title="@Shiura Creates Open Source ‘Space Mushroom’ 6DOF Mouse"
          date="JANUARY 1, 2023"
          type="OPEN SOURCE"
        />
        <Article
          title="@Shiura Creates Open Source ‘Space Mushroom’ 6DOF Mouse"
          date="JANUARY 1, 2023"
          type="OPEN SOURCE"
        />
      </ArticleList>
    </div>
  );
};