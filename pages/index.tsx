import React, { memo } from "react";
import Parser from "rss-parser";
import { Article, ArticleList, Footer, Navigation } from "../components";


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

	console.log("data", data);
	console.log("content:encoded", data.rssFeed.items[0]["content:encoded"]);

	const articleArray = data.rssFeed.items.map((a: any, key: string) => {
		return (
      <Article
        title={a.title}
				image={""}
				content={a.content}
        date={a.pubDate}
        type={a.categories}
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
			<Footer />
    </div>
  );
};