import { useEffect, useState } from "react";
import { themes } from "./themes";

export const useTheme = () => {

  const [theme, setTheme] = useState(themes.dark);

  return { theme, setTheme };
};
