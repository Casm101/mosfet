import React, { memo } from "react";
import Parser from "rss-parser";
import { Article, ArticleList, Navigation } from "../components";


export const getStaticProps = async () => {
	const feedParser = new Parser();
  const rssFeed = await feedParser.parseURL("https://mosfet.net/feed/");

  return {
    props: {
    	rssFeed,
    },
  };
};

export default function Home(data: any) {

	console.log(data);

	const articleArray = data.rssFeed.items.map((a: any, key: string) => {
		return (
      <Article
        title={a.title}
        date={a.pubDate}
        type={a.categories[0]}
				key={key}
      />
    );
	});

	return (
    <div className="page column">
      <Navigation />
      <ArticleList>
        {articleArray && articleArray}
      </ArticleList>
    </div>
  );
};