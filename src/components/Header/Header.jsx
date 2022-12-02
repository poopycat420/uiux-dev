import { Typography } from "@mui/material";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #004A7C;
  color: white;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 0 3vw;
`;

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <Typography variant="h2">Calisthenics Pal</Typography>
      </StyledHeader>
    </>
  );
};
