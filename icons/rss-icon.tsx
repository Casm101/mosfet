import React from "react";
import { useTheme } from "../theme/useTheme";
import { IIcon } from "../types";

export const RSSIcon = ({ fill = false, size = { h: 24, w: 24 } }: IIcon) => {
	
  const theme = useTheme();
  const color = theme.theme.colors.text_primary;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19.562"
      x="0"
      y="0"
      enableBackground="new 0 0 18 19.562"
      version="1.1"
      viewBox="0 0 18 19.562"
      xmlSpace="preserve"
    >
      <path
        fill={color}
        d="M1.967 1.322c2.637.229 5.157.864 7.477 2.181 2.299 1.304 4.073 3.127 5.36 5.429 1.035 1.851 1.687 3.837 2.008 5.927.112.734.141 1.48.205 2.222.004.047-.004.097-.008.157h-2.925c-.039-.305-.078-.615-.121-.926-.366-2.654-1.239-5.108-2.897-7.242a11.708 11.708 0 00-3.619-3.075 13.83 13.83 0 00-5.556-1.684c-.245-.022-.49-.037-.757-.057M1.134 4.254V1.263"
      ></path>
      <path
        fill={color}
        d="M11.724 17.244H8.526c-.041-.414-.066-.825-.127-1.231-.342-2.304-1.461-4.096-3.506-5.269-1.126-.645-2.349-.984-3.635-1.113l-.117-.013V6.673c.38.031.757.051 1.131.094 1.021.119 2.021.335 2.986.691 1.474.543 2.757 1.372 3.806 2.556 1.314 1.482 2.062 3.229 2.404 5.159.119.674.17 1.36.256 2.071"
      ></path>
      <path
        fill={color}
        d="M1.133 15.107a2.123 2.123 0 012.149-2.125 2.134 2.134 0 012.12 2.139 2.144 2.144 0 01-2.154 2.129 2.133 2.133 0 01-2.115-2.143"
      ></path>
    </svg>
  );
};