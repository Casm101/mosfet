import React from "react";
import { IIcon } from "../types";
import { useTheme } from "../theme/useTheme";

export const BookmarkIcon = ({
	fill = false,
  size = { h: 24, w: 24 },
}: IIcon) => {

	const theme = useTheme();
	const color = theme.theme.colors.text_primary;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.w}
      height={size.h}
      fill={fill ? color : "none"}
      stroke={color}
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      ></path>
    </svg>
  );
};
