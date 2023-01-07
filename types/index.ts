export interface INavigation {
  title?: string;
}

export interface IFooter {
  title?: string;
}

export interface IArticle {
	title: string;
	content: any;
	date: string;
	type: string[];
	open?: boolean;
}

export interface IIcon {
	color?: string;
	fill?: boolean;
	size?: {
		h: number,
		w: number,
	}
	onClick?: any;
}

export interface IDropMenu {
	className: "left" | "right";
}

export interface IBookmarkButton {
	articleID: string;
	article: any;
}

export interface IBookmark {
	title: string;
	date: string;
	content: string;
}

export interface ITheme {
  body: string;
  text_primary: string;
  text_secondary: string;
  filter?: string;
}