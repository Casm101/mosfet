import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

	@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Titillium+Web&display=swap');

	* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
	}

	html, body {
		max-width: 100vw;
		overflow-x: hidden;
		background-color: ${({ theme }) => theme.colors.body};
		color: ${({ theme }) => theme.colors.text_primary};

		font-family: ${({ theme }) => theme.font};
		
		transition: all 0.50s linear;
	}

	.page {
		display: flex;
		justify-contents: center;
		align-items: center;

		&.column {
			flex-direction: column;
	}
`;