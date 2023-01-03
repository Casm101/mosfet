import styled from "styled-components";

export const ArticleCard = styled.div<{ open: boolean }>`
  .articleHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    cursor: pointer;

		.title {
			font-size: 1.5rem;
		}
		.subtitle {
			font-size: 0.9rem;
			padding: 0.5rem 0;

			display: flex;
			gap: .5rem;
		}

    .bookMark {
      transition: opacity 0.15s;
      opacity: 0;
    }

    &:hover {
      .bookMark {
        opacity: 1;
      }
    }
  }

  .articleContents {
    max-height: 0;
    overflow: hidden;
    margin-top: 0;

    .imageContainer {
      width: 100%;
    }

    .contents {
      p {
        padding: 0.5rem 0;
      }
    }

    &.open {
      max-height: 100%;
      margin-top: 1rem;
    }
  }
`;

export const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
	gap: 1.5rem;

  max-width: 700px;
  width: 85%;
  margin-top: 100px;
`;