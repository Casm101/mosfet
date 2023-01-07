import styled from "styled-components";

export const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  width: 100%;
  height: 8vh;

  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text_primary};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.text_primary};
`;