import styled from "styled-components";

export const ArticleCard = styled.div<{ open: boolean }>`
  .articleHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    width: 100%;

    .title {
      font-size: 1.5rem;
      cursor: pointer;
    }
    .subtitle {
      font-size: 0.9rem;
      padding: 0.5rem 0;

      display: flex;
      gap: 0.5rem;
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

    figure {
      //background-color: ${({ theme }) => theme.colors.text_primary};
    }
    img,
    video,
    iframe {
      width: 100% !important;
      height: auto;

      filter: grayscale(100%);
      mix-blend-mode: multiply;
    }

    .contents {
      margin-bottom: 0rem;
      p,
      h1,
      h2 {
        padding: 0.5rem 0;
      }
      a {
        color: #8f8f8f;
      }
    }

    &.open {
      max-height: 100%;
      margin-top: 1rem;

      .contents {
        margin-bottom: 2rem;
      }
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