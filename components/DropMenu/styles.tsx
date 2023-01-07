import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  top: 42px;

  display: flex;
  flex-direction: column;

  border: 1px solid #1f1f1f;
  background-color: #0d0d0d;

	.left { left: 50%; }
	.right { right: -50%; }

  .link {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .header {
  }

  .section {
    border-top: 1px solid #1f1f1f;
    margin-top: -1px;
    padding: 1.5rem;
  }
`;