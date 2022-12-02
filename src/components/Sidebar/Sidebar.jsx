import { Button, Chip, Typography } from "@mui/material";
import styled from "styled-components";
import { exerciseDifficultyScore, sumArray } from "../../utils/utils";
import { SidebarCard } from "../SidebarCard/SidebarCard";

const StyledSidebar = styled.div`
  border-right: 1px solid black;
  height: 90vh;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #E8F1F5;
`;

const HeadingContainer = styled.div`
  height: 5%;
  padding: 0% 10% 10% 10%;
  text-align: center;
`;

const CardOuterContainer = styled.div`
  height: 70%;
  overflow: auto;
  padding: 5% 10% 0% 10%;
`;

const ButtonContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  padding: 5%;
`;

const SummaryContainer = styled.div`
  height: 10%;
  text-align: center;
  padding: 5%;
`


export const Sidebar = ({ selected, setSelected, removeExercise }) => {
  let difficultyScore = 0;
  let averageDifficulty = "N/A";
  if (selected.length > 0) {
    difficultyScore = Math.round(
      sumArray(selected.map(exerciseDifficultyScore)) / selected.length
    );
    if (difficultyScore === 1) averageDifficulty = "Beginner";
    else if (difficultyScore === 2) averageDifficulty = "Intermediate";
    else if (difficultyScore === 3) averageDifficulty = "Advanced";
    else averageDifficulty = "N/A";
  }

  return (
    <StyledSidebar>
      <HeadingContainer>
        <Typography variant="h5">Your Exercises</Typography>
      </HeadingContainer>
      <CardOuterContainer>
        {selected.map((exercise) => {
          return (
            <SidebarCard exercise={exercise} removeExercise={removeExercise} />
          );
        })}
      </CardOuterContainer>
      <SummaryContainer>
        <Typography sx={{ display: "inline" }}>Average Difficulty: </Typography>
        <Chip label={averageDifficulty} color="secondary"></Chip>
      </SummaryContainer>
      <ButtonContainer>
        <Button
          variant="contained"
          sx={{ width: "80%" }}
          onClick={() => setSelected([])}
        >
          Clear
        </Button>
      </ButtonContainer>
    </StyledSidebar>
  );
};
