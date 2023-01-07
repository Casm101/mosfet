import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  width: 100%;
  height: 8vh;

  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text_primary};
  border-top: 1px dashed ${({ theme }) => theme.colors.text_primary};
  margin-top: 1.5rem;
`;