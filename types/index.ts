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
	size?: {
		h: number,
		w: number,
	}
	onClick?: any;
}

export interface IDropMenu {
	className: "left" | "right";

}