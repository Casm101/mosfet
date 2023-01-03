export interface INavigation {
  title?: string;
}

export interface IArticle {
	title: string;
	image: string;
	content: any;
	date: string;
	type: string[];
	open?: boolean;
}

export interface IIcon {
	color?: string;
	size?: {
		h: number,
		w: number,
	}
}