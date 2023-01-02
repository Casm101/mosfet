import styled from "styled-components";

export const ArticleCard = styled.div<{ open: boolean }>`
  .articleHeader {
    cursor: pointer;

    .title {
      font-size: 1.5rem;
    }
    .subtitle {
      font-size: 0.9rem;
      padding: 0.5rem 0;
    }
  }

  .articleContents {
    margin-top: 1.5rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;

    .imageContainer {
      width: 100%;
    }

    &.open {
      max-height: 100%;
    }
  }
`;

export const ArticleList = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 700px;
  width: 90%;
  margin-top: 100px;
`;